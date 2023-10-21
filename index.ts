import type { BuildConfig, ServerWebSocket, WebSocketServeOptions } from "bun"
import type { FSWatcher, WatchOptions, WatchEventType, WatchListener } from "fs"
import * as path from "path"
import * as fs from "fs"

const PROJECT_ROOT = import.meta.dir;
const PUBLIC_DIR = path.resolve( PROJECT_ROOT, "public" )
const SOURCE_DIR = path.resolve( PROJECT_ROOT, "src" )
const BUILD_DIR = path.resolve( PROJECT_ROOT, "build" )
const RELOAD_COMMAND = "/hot"

let wss: ServerWebSocket

const listener = async ( event: WatchEventType, filename: any ) => {
  console.log( `fs.watch(): Detected ${ event } on ${ filename }` )
  await Bun.build( buildConfig )
  if( wss ) {
    console.log( `fs.watch(): Sending RELOAD_COMMAND to websocket` )
    wss.send( RELOAD_COMMAND )
  }
}

const watcher = fs.watch( SOURCE_DIR, { recursive: true }, listener )

const buildConfig = {
  entrypoints: [ path.resolve( SOURCE_DIR, "main.tsx" ) ],
  outdir: BUILD_DIR,
  target: "browser",
  splitting: true,
  publicPath: PUBLIC_DIR
} satisfies BuildConfig

await Bun.build( buildConfig )

const lookup = ( dir: string, uri: string ): Response | null => {
  try {
    if( "/" === uri ) uri = "/index.html"
    const filePath = path.join( dir, uri )
    if( fs.statSync( filePath )?.isFile() ) {
      const file = Bun.file( filePath )
      return new Response( file, { headers: { "Content-Type": file.type } } )
    }
  } catch( err ) {}
  return null
}

export default {
  websocket: {
    open: async( ws ) => {
      console.log( `websocket: Opened socket ${ ws.remoteAddress }` )
      wss = ws
    },
    message: async ( ws, msg ) => {
      console.log( `websocket: Received ${ msg } from ${ ws.remoteAddress }` )
    }
  },
  fetch: async ( req, srv ) => {
    if( req.url.endsWith( RELOAD_COMMAND ) ) {
      if( srv.upgrade( req ) ) {
        return new Response( "Switching Protocols", { status: 101 } )
      }
      return new Response( "Bad Request", { status: 400 } );
    }
    const uri = new URL( req.url ).pathname
    const bases = [ PUBLIC_DIR, BUILD_DIR ]
    for( let baseDir of bases ) {
      const found = lookup( baseDir, uri )
      if( found ) {
        if( ! found.headers.get( "Content-Type" )?.startsWith( "text/html" ) ) {
          return found
        }
        const contentType = found.headers.get( "Content-Type" )
        const contents = await found.text()
        const html = new Response( contents, { status: 200, statusText: "OK", headers: { "Content-Type": `${ contentType }` } } )
        return new HTMLRewriter()
          .on( "body > script:not([src])", {
            element: ( element ) => {
              element.remove()
            }
          } )
          .on( "body", {
            element: ( element ) => {
              const url = `ws://${ srv.hostname }:${ srv.port }${ RELOAD_COMMAND }`
              const inlineScript = `(()=>{const o=new WebSocket("${ url }");o.onmessage=({data:o})=>{"${ RELOAD_COMMAND }"===o&&(console.log("Received RELOAD_COMMAND, reloading window..."),location.reload())},console.log("Hot reloading enabled."),window.onbeforeunload=()=>{console.log("Closing websocket..."),o.close()}})();`
              element.append( `<script>${ inlineScript }</script>`, { html: true } )
            }
          } )
          .transform( html )
      }
    }
    return new Response( "Not Found", { status: 404 } );
  }
} satisfies WebSocketServeOptions
