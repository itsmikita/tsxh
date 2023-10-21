import tsxh, { render } from "@/pragma"
import DOM from "@/dom"
import { App } from "@/components/App"

const { document } = DOM

render( <App />, document!.querySelector<HTMLElement>( "#app" ) )