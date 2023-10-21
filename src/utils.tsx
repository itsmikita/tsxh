import { svgTags } from "./tags"

/**
 * Camelize a string, cutting the string by multiple separators like
 * hyphens, underscores and spaces.
 * 
 * @param text string String to camelize
 * @returns string Camelized string
 */
export const camelize = ( text: string ): string => 
  text.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    ( match: string, p1: string, p2: string, offset: string ): string => 
      p2 ? p2.toUpperCase() : p1.toLowerCase() 
  )

/**
 * Decamelizes a string with/without a custom separator ("-" by default).
 * 
 * @param text string String in camelcase
 * @param separator string Separator for the new decamelized string
 * @returns string Decamelized string
 */
export const decamelize = ( text: string, separator: string = "-" ): string =>
  text
    .replace( /([a-z\d])([A-Z])/g, `$1${ separator }$2` )
    .replace( /([A-Z]+)([A-Z][a-z\d]+)/g, `$1${ separator }$2` )
    .toLowerCase()

/**
 * Flatten Object, decamelizing its properties
 * 
 * @param object any Object to flatten
 * @returns string Semicolon-separated decamelized string
 */
export const flatten = ( object: any ): string =>
  Object.keys( object ).reduce( ( accumulated: string, property: string ) => {
    accumulated += `${ decamelize( property, "-" ) }: ${ object[ property ] }; `
    return accumulated
  }, "" )

/**
 * Check if the tag is SVG
 * 
 * @param tag string 
 * @returns 
 */
export const isSvgTag = ( tag: string ) => 
  svgTags.includes( tag )

/**
 * Warn incorrect value type
 * 
 * @param tag 
 * @param prop 
 * @param expected 
 * @param actual 
 * @returns void
 */
export const warn = ( tag: string, prop: string, expected: string, actual: any ) =>
  console.warn(
    tag,
    `received incorrect value type for property '${ prop }': expected `,
    typeof expected,
    `instead of `,
    typeof actual
  )

/**
 * Print an error to console
 * 
 * @param msg string
 * @param err any
 * @returns void
 */
export const error = ( tag: string, prop: string, err: any ) =>
  console.error( `Could not set '${ prop }' on '${ tag }'`, err )

