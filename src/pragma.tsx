/// <reference lib="dom" />

import { default as DOM } from "./dom"
import { error, isSvgTag, warn } from "./utils"

const SVG_XMLNS = "http://www.w3.org/2000/svg"

declare namespace JSX {
  // The return type of our JSX Factory
  export type Element = globalThis.Element
  export type Children = Element | Element[]
  export type Fragment = Node[]

  // IntrinsicElementMap grabs all the standard HTML tags in the TS DOM lib.
  interface IntrinsicElements extends IntrinsicElementMap {  }

  export type HTMLElementCommonAttributes = Partial<{
    style: Partial<CSSStyleDeclaration> | string
  }>

  export type CommonEvents = {
    [ E in keyof GlobalEventHandlers ]?: GlobalEventHandlers[ E ]
  }

  export type GlobalAttributes = CommonEvents & Partial<{
    // per https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
    accesskey: string
    autocaptialize: "off" | "none" | "on" | "sentences" | "words" | "characters"
    autofocus: boolean
    class: string
    contenteditable: boolean | "false"
    contextmenu: string
    dir: "ltr" | "rtl" | "auto"
    draggable: "true" | "false"
    enterkeyhint: string
    hidden: boolean
    id: string
    inputmode: string  
    is: string
    itemid: string
    itemprop: string
    itemref: string
    itemscope: string
    itemtype: string
    lang: string
    nonce: string
    part: string
    role: string
    slot: string
    spellcheck: boolean | "false"
    tabindex: string | number
    title: string
    translate: true | "yes" | "no"
  }>

  // The following are custom types, not part of TS"s known JSX namespace:
  export  type IntrinsicElementMap =
    {
      [ K in keyof HTMLElementTagNameMap ]: HTMLElementCommonAttributes & GlobalAttributes & Record<string, any>
    } & {
      [ K in keyof SVGElementTagNameMap ]: GlobalAttributes & Record<string, any>
    }

  export type Tag = keyof JSX.IntrinsicElements
  export type HTMLTag = keyof HTMLElementTagNameMap
  export type SVGTag = keyof SVGElementTagNameMap

  interface Component<T = undefined | {}> {
    ( properties: T, children?: Node[] ): Element
  }
}

export type AllElementTagNameMap = HTMLElementTagNameMap & SVGElementTagNameMap

export type RecursivePartial<T> = {
  [ P in keyof T ]?: RecursivePartial<T[P]>
}

/**
 * Hyperscript
 * 
 * @param tag 
 * @param properties 
 * @param children 
 * @returns Element
 */
export function h<T extends JSX.HTMLTag = JSX.HTMLTag>( tag: T | JSX.Component, properties: RecursivePartial<JSX.IntrinsicElements[T]> | null, ...children: Node[] ): HTMLElement
export function h<T extends JSX.SVGTag = JSX.SVGTag>( tag: T | JSX.Component, properties: RecursivePartial<JSX.IntrinsicElements[T]> | null, ...children: Node[] ): SVGElement
export function h( tag: JSX.Component, properties: Parameters<typeof tag> | null, ...children: Node[] ): Node
export function h( tag: JSX.Tag | JSX.Component, properties: { [ key: string ]: any } | null, ...children: any[] ) {
  const { window, document, Node } = DOM

  if( "function" === typeof tag ) {
    return tag( properties ?? {}, children )
  }
  
  const element = isSvgTag( tag ) ? document!.createElementNS( SVG_XMLNS, tag ) : document!.createElement( tag )
  
  let map = ( properties ?? {} ) as RecursivePartial<JSX.IntrinsicElements[ typeof tag ]>
  let prop: keyof JSX.IntrinsicElements[ typeof tag ]
  for( prop of Object.keys( map ) ) {
    prop = prop.toString()
    const value = map[ prop ] as any

    // Properties
    switch( prop ) {
      case "style": {
        if( "object" === typeof value ) {
          for( const [ k, v ] of Object.entries( value ) ) {
            const styleProperty = k as any
            if( "string" !== typeof v ) {
              continue
            }
            element!.style[ styleProperty ] = v
          }
        }
        else if( "string" === typeof value ) {
          break
        }
        else {
          warn( tag, prop, "object | string", value )
        }
        continue
      }
    }

    // Events
    if( prop.startsWith( "on" ) && prop.toLowerCase() in window ) {
      if( "function" === typeof value ) {
        element.addEventListener( prop.substring( 2 ).toLowerCase(), map[ prop ] as any )
      }
      else {
        warn( tag, prop, "function", value )
      }
      continue
    }

    // The rest
    try {
      const anyReference = element as any
      if( "undefined" === typeof anyReference[ prop ] ) {
        // As a fallback, try to set the attribute
        element.setAttribute( prop, value )
      }
      else {
        anyReference[ prop ] = value
      }
    }
    catch( err ) {
      error( tag, prop, err )
    }
  }

  // Append children
  for( let child of children.flat() ) {
    if( child instanceof Node ) {
      element.appendChild( child )
      continue
    }
    if( "string" !== typeof child && child?.[ Symbol.iterator ] ) {
      element.append( ...child )
      continue
    }
    element.append( child )
  }

  return element
}

/**
 * Fragment
 * 
 * @param _ 
 * @param children Node[] 
 * @returns Node[]
 */
export function Fragment( _: {}, children: Node[] ): JSX.Fragment {
  return children
}

/**
 * Render element to conatiner
 * 
 * @param element Element
 * @param container HTMLElement
 * @returns HTMLElement
 */
export const render = ( element: Element | JSX.Element | string, container: HTMLElement ) => {
  container.innerHTML = ""
  for( let child of [ element ].flat() ) {
    if( child instanceof Node ) {
      container.appendChild( child )
      continue
    }
    if( "string" !== typeof element && element?.[ Symbol.iterator ] ) {
      container.append( ...child )
      continue
    }
    container.append( element )
  }
  return container
}

const tsxh: typeof h & { Fragment?: typeof Fragment } = h
tsxh.Fragment = Fragment

export { default as DOM } from "./dom"
export default tsxh