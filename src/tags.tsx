// html elements list and docs extracted from
// https://www.html.am/tags/

// svg element list and docs extracted from
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element

export const selfClosing = [
  'area', //  - HTML area tag defines an area in an image based on coordinates which then accepts an URL and become a clickable area behaving like a hyperlink
  'base', //  - It defines the base URL for all the relative URLs in the document
  'br', //  - br is used to create a line break
  'col', //  - It defines a column in a table to define a common style or property of that column
  'embed', //  - It is used to embed external content on the webpage
  'hr', //  - It creates a horizontal line
  'img', //  - It is used to define an image
  'link', //  - It is mostly used to add external stylesheets to the HTML document
  'meta', //  - It is used to give metadata to the webpage
  'param', //  - It defines parameter to the object
  'source', //  - It is used to give multiple media of resources for audio, video, and pictures
  'track', //  - It is used in media files to provide times text tracks
  'wbr', // - It provides a word break position in a paragraph for the browsers
]

export const bodyTags = [
  // Represents a hyperlink (the link that a user clicks on to go to another web page or document).
  'a',
  // Represents an abbreviation
  'abbr',
  // Represents an address element
  'address',
  // Represents an area inside an image map. Used with the map and img elements.
  'area',
  // Represents an article. This HTML tag was introduced in HTML5.
  'article',
  // Represents content aside from the page content. This HTML element is new in HTML5.
  'aside',
  // Represents sound content. The audio element is new in HTML5.
  'audio',
  // Represents bold text. Not to be confused with the strong element.
  'b',
  // For bi-directional text formatting. This HTML tag was introduced in HTML5.
  'bdi',
  // Represents the direction of text display
  'bdo',
  // Represents a long quotation. For short quotations see the q element.
  'blockquote',
  // Represents the body element
  'body',
  // Inserts a single line break
  'br',
  // Represents a button form control.
  'button',
  // Define graphics. The canvas tag is new in HTML5.
  'canvas',
  // Represents a table caption
  'caption',
  // Represents a citation
  'cite',
  // Represents computer code text
  'code',
  // Represents attributes for table columns&nbsp;
  'col',
  // Represents groups of table columns
  'colgroup',
  // Allows for machine-readable data to be provided. This tag was introduced in HTML5.
  'data',
  // Represents an "autocomplete" dropdown list. The datalist tag was introduced in HTML5.
  'datalist',
  // Represents a definition description
  'dd',
  // Represents deleted text
  'del',
  // Represents details of an element. This tag was introduced in HTML5.
  'details',
  // Defines&nbsp;a definition term
  'dfn',
  // Represents that part of an application is interactive. This tag is new in HTML5.
  'dialog',
  // Represents a section in a document
  'div',
  // Represents a definition list
  'dl',
  // Represents a definition term
  'dt',
  // Represents emphasized text&nbsp;
  'em',
  // Represents external application or interactive content. The embed tag was introduced in HTML5 (although browsers have supported it since long before HTML5).
  'embed',
  // Represents a fieldset
  'fieldset',
  // Represents caption for the 'code',figure'/code', element. The figcaption tag is new in HTML5.
  'figcaption',
  // Represents a group of media content, and their caption. This tag was introduced in HTML5.
  'figure',
  // Represents a footer for a section or page. This tag was introduced in HTML5.
  'footer',
  // Represents a form&nbsp;
  'form',
  // Represents a heading level 1
  'h1',
  // Represents a heading level 2
  'h2',
  // Represents a heading level 3
  'h3',
  // Represents a heading level 4
  'h4',
  // Represents a heading level 5
  'h5',
  // Represents a heading level 6
  'h6',
  // Represents a group of introductory or navigational aids, including 'code',hgroup'/code', elements. This tag was introduced in HTML5.
  'header',
  // Represents a header for a section or page.
  // Note that this element has been dropped from the W3C HTML5 specification but it is still included in the WHATWG HTML Living Standard.
  'hgroup',
  // Represents a horizontal rule
  'hr',
  // Represents italic text
  'i',
  // Represents an inline sub window (frame)
  'iframe',
  // Represents an image
  'img',
  // Represents an input field
  'input',
  // Represents inserted text
  'ins',
  // Represents keyboard text
  'kbd',
  // Represents a label&nbsp;for a form control
  'label',
  // Represents a title in a fieldset
  'legend',
  // Represents a list item
  'li',
  // Represents the main content area of an HTML document. This tag is new in HTML5.
  'main',
  // Represents an image map&nbsp;
  'map',
  // Represents marked text. This tag was introduced in HTML5.
  'mark',
  // Represents measurement within a predefined range. This element is new in HTML5.
  'meter',
  // Represents navigation links. This tag was introduced in HTML5.
  'nav',
  // Represents a noscript section
  'noscript',
  // Represents an embedded object
  'object',
  // Represents an ordered list
  'ol',
  // Represents an option group
  'optgroup',
  // Represents an option in a drop-down list
  'option',
  // Represents some types of output. The output element was introduced in HTML5.
  'output',
  // Represents a paragraph
  'p',
  // Represents a parameter for an object
  'param',
  // Represents preformatted text
  'pre',
  // Represents progress of a task of any kind. This element was introduced in HTML5.
  'progress',
  // Represents a short quotation
  'q',
  // Marks the base text component of a ruby annotation. This tag is new in HTML5.
  'rb',
  // Used for the benefit of browsers that don't support ruby annotations. This element was introduced in HTML5.
  'rp',
  // Represents the ruby text component of a ruby annotation. This element was introduced in HTML5.
  'rt',
  // Marks the ruby text container for ruby text components in a ruby annotation. This element is new in HTML5.
  'rtc',
  // Represents a ruby annotation (used in East Asian typography). The ruby element was introduced in HTML5.
  'ruby',
  // Indicates text that's no longer accurate or relevant.
  's',
  // Represents sample computer code
  'samp',
  // Represents a script
  'script',
  // Represents a section. This tag is new in HTML5.
  'section',
  // Represents a selectable list
  'select',
  // Represents small text
  'small',
  // Represents media resources. This HTML element is new in HTML5.
  'source',
  // Represents a section in a document
  'span',
  // Represents strong text
  'strong',
  // Represents a style definition
  'style',
  // Represents subscripted text
  'sub',
  // Represents a summary / caption for the details element. This HTML tag is new in HTML5.
  'summary',
  // Represents superscripted text
  'sup',
  // Represents a table
  'table',
  // Represents a table body
  'tbody',
  // Represents a table cell
  'td',
  // Allows you to declare an HTML fragment that can be cloned and inserted in the document by script.
  'template',
  // Represents a text area
  'textarea',
  // Represents a table footer
  'tfoot',
  // Represents a table header
  'th',
  // Represents a table header
  'thead',
  // Represents a date/time. This HTML element was introduced in HTML5.
  'time',
  // Represents a table row
  'tr',
  // Represents a text track for media such as video and audio. This element is new in HTML5.
  'track',
  // Represents text with a non-textual annotation.
  'u',
  // Represents an unordered list
  'ul',
  // Represents a variable
  // Breaks the build (of course)
  //~ 'var',
  // Represents a video. The video element is new in HTML5.
  'video',
  // Represents a line break 'i',opportunity'/i', for very long words and strings of text with no spaces. This tag is new in HTML5.
  'wbr',
]

export const headTags = [
  // Represents a base URL for all the links in a page
  'base',
  // Represents information about the document
  'head',
  // Represents an html document
  'html',
  // Represents a resource reference
  'link',
  // Represents meta information
  'meta',
  // Represents the document title
  'title',
]

export const svgTags = [
  // The <a> SVG element creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.
  'a',
  // This element implements the SVGAnimateElement interface.
  'animate',
  // The <animateMotion> element causes a referenced element to move along a motion path.
  'animateMotion',
  // The animateTransform element animates a transformation attribute on a target element, thereby allowing animations to control translation, scaling, rotation and/or skewing.
  'animateTransform',
  // The <circle> SVG element is an SVG basic shape, used to create circles based on a center point and a radius.
  'circle',
  // The <clipPath> SVG element defines a clipping path. A clipping path is used/referenced using the clip-path property.
  'clipPath',
  // The <color-profile> element allows describing the color profile used for the image.
  // DOES NOT CONFORM TO HTML ELEMENT NAMES. DISABLED
  // 'color-profile',
  // The <defs> element is used to store graphical objects that will be used at a later time. Objects created inside a <defs> element are not rendered directly. To display them you have to reference them (with a <use> element for example).
  'defs',
  // Each container element or graphics element in an SVG drawing can supply a description string using the <desc> element where the description is text-only.
  'desc',
  // The <discard> SVG element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.
  'discard',
  // The <ellipse> element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
  'ellipse',
  // The <feBlend> SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute.
  'feBlend',
  // The <feColorMatrix> SVG filter element changes colors based on a transformation matrix. Every pixel's color value (represented by an [R,G,B,A] vector) is matrix multiplied to create a new color:
  'feColorMatrix',
  // Th <feComponentTransfer> SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.
  'feComponentTransfer',
  // The <feComposite> SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, and lighter. Additionally, a component-wise arithmetic operation (with the result clamped between [0..1]) can be applied.
  'feComposite',
  // The <feConvolveMatrix> SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.
  'feConvolveMatrix',
  // The <feDiffuseLighting> SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map.
  'feDiffuseLighting',
  // The <feDisplacementMap> SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.
  'feDisplacementMap',
  // The <feDistantLight> filter primitive defines a distant light source that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.
  'feDistantLight',
  // The <feDropShadow> filter primitive creates a drop shadow of the input image. It is a shorthand filter, and is defined in terms of combinations of other filter primitives.
  'feDropShadow',
  // The <feFlood> SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.
  'feFlood',
  // The <feFuncA> SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent <feComponentTransfer> element.
  'feFuncA',
  // The <feFuncB> SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent <feComponentTransfer> element.
  'feFuncB',
  // The <feFuncG> SVG filter primitive defines the transfer function for the green component of the input graphic of its parent <feComponentTransfer> element.
  'feFuncG',
  // The <feFuncR> SVG filter primitive defines the transfer function for the red component of the input graphic of its parent <feComponentTransfer> element.
  'feFuncR',
  // The <feGaussianBlur> SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.
  'feGaussianBlur',
  // The <feImage> SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)
  'feImage',
  // The <feMerge> SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a <feMergeNode> child.
  'feMerge',
  // The feMergeNode takes the result of another filter to be processed by its parent <feMerge>.
  'feMergeNode',
  // The <feMorphology> SVG filter primitive is used to erode or dilate the input image. It's usefulness lies especially in fattening or thinning effects.
  'feMorphology',
  // The <feOffset> SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes.
  'feOffset',
  // The <fePointLight> filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.
  'fePointLight',
  // The <feSpecularLighting> SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.
  'feSpecularLighting',
  // The <feSpotLight> SVG filter primitive defines a light source which allows to create a spotlight effect. It that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.
  'feSpotLight',
  // The <feTile> SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a <pattern>.
  'feTile',
  // The <feTurbulence> SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.
  'feTurbulence',
  // The <filter> SVG element serves as container for atomic filter operations. It is never rendered directly. A filter is referenced by using the filter attribute on the target SVG element or via the filter CSS property.
  'filter',
  // The <foreignObject> SVG element allows for inclusion of a different XML namespace. In the context of a browser it is most likely XHTML/HTML.
  'foreignObject',
  // The <g> SVG element is a container used to group other SVG elements.
  'g',
  // The <hatch> SVG element is used to fill or stroke an object using one or more pre-defined paths that are repeated at fixed intervals in a specified direction to cover the areas to be painted.
  'hatch',
  // The <hatchpath> SVG element defines a hatch path used by the <hatch> element.
  'hatchpath',
  // The <image> SVG element includes images inside SVG documents. It can display raster image files or other SVG files.
  'image',
  // The <line> element is an SVG basic shape used to create a line connecting two points.
  'line',
  // The <linearGradient> element lets authors define linear gradients that can be applied to fill or stroke of graphical elements.
  'linearGradient',
  // The <marker> element defines the graphic&nbsp;that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.
  'marker',
  // The <mask> element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.
  'mask',
  'mesh',
  'meshgradient',
  'meshpatch',
  'meshrow',
  // The <metadata> SVG element allows to add metadata to SVG content.
  // Metadata is structured information about data.
  // The contents of <metadata> elements should be elements from other XML namespaces such as RDF, FOAF, etc.
  'metadata',
  // The <mpath> sub-element for the <animateMotion> element provides the ability to reference an external <path> element as the definition of a motion path.
  'mpath',
  // The <path> SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.
  'path',
  // The <pattern> element defines a graphics object which can be redrawn at repeated x and y-coordinate intervals (&quot;tiled&quot;) to cover an area.
  'pattern',
  // The HTML <picture> element contains zero or more <source> elements and one element to offer alternative versions of an image for different display/device scenarios.
  'picture',
  // The <polygon> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point. For open shapes see the&nbsp;<polyline> element.
  'polygon',
  // The <polyline> SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the <polygon> element.
  'polyline',
  // The <radialGradient> SVG element lets authors define radial gradients to fill or stroke graphical elements.
  'radialGradient',
  // The <rect> element is a basic SVG shape that creates rectangles, defined by their corner's position, their width, and their height. The rectangles may have their corners rounded.
  'rect',
  // A SVG script element is equivalent to the script element in HTML and thus is the place for scripts (e.g., ECMAScript).
  'script',
  // The <set> element provides a simple means of just setting the value of an attribute for a specified duration. It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. The <set> element is non-additive. The additive and accumulate attributes are not allowed, and will be ignored if specified.
  'set',
  // The <solidcolor> SVG element lets authors define a single color for use in multiple places in an SVG document. It is also useful as away of animating a palette colors.
  'solidcolor',
  // The <stop> SVG element defines the ramp of colors to use on a gradient, which is a child element to either the <linearGradient> or the <radialGradient> element.
  'stop',
  // The <style> SVG element allows style sheets to be embedded directly within SVG content. SVG's style element has the same attributes as the corresponding element in HTML (see HTML's <style> element).
  'style',
  // The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of any SVG document but it can also be used to embed a SVG fragment inside any SVG or HTML document.
  'svg',
  // The <switch> SVG element evaluates the requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then processes and renders the first child for which these attributes evaluate to true. All others will be bypassed and therefore not rendered. If the child element is a container element such as a <g>, then the entire subtree is either processed/rendered or bypassed/not rendered.
  // Object.switch breaks javascript
  // 'switch',
  // The <symbol> element is used to define graphical template objects which can be instantiated by a <use> element.
  'symbol',
  // The SVG <text> element defines a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, just like any other SVG graphics element.
  'text',
  // In addition to text drawn in a straight line, SVG also includes the ability to place text along the shape of a <path> element. To specify that a block of text is to be rendered along the shape of a <path>, include the given text within a <textPath> element which includes an href attribute with a reference to a <path> element.
  'textPath',
  // Each container element or graphics element in an SVG drawing can supply a <title> element containing a description string where the description is text-only. When the current SVG document fragment is rendered as SVG on visual media, <title> element is not rendered as part of the graphics. However, some user agents may, for example, display the <title> element as a tooltip. Alternate presentations are possible, both visual and aural, which display the <title> element but do not display path elements or other graphics elements. The <title> element generally improves accessibility of SVG documents.
  'title',
  // Within a <text> element, text and font properties and the current text position can be adjusted with absolute or relative coordinate values by including a <tspan> element.
  'tspan',
  'unknown',
  // The <use> element takes nodes from within the SVG document, and duplicates them somewhere else.
  'use',
  // A view is a defined way to view the image, like a zoom level or a detail view.
  'view',
]

export const tags = [ ...headTags, ...bodyTags, ...svgTags ]

export default tags