// src/dom.tsx
class DOM {
  _window = null;
  _document = null;
  _node;
  set window(w) {
    this._window = w;
  }
  get window() {
    return this._window ?? globalThis.window;
  }
  set document(d) {
    this._document = d;
  }
  get document() {
    return this._document ?? globalThis.document;
  }
  set Node(n) {
    this._node = n;
  }
  get Node() {
    return this._node ?? globalThis.Node;
  }
  useGlobalWindow() {
    this._window = null;
  }
  useGlobalDocument() {
    this._document = null;
  }
  useGlobalNode() {
    this._node = null;
  }
}
var dom_default = new DOM;

// src/tags.tsx
var bodyTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "u",
  "ul",
  "video",
  "wbr"
];
var headTags = [
  "base",
  "head",
  "html",
  "link",
  "meta",
  "title"
];
var svgTags = [
  "a",
  "animate",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "defs",
  "desc",
  "discard",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "foreignObject",
  "g",
  "hatch",
  "hatchpath",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "picture",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "script",
  "set",
  "solidcolor",
  "stop",
  "style",
  "svg",
  "symbol",
  "text",
  "textPath",
  "title",
  "tspan",
  "unknown",
  "use",
  "view"
];
var tags = [...headTags, ...bodyTags, ...svgTags];

// src/utils.tsx
var isSvgTag = (tag) => svgTags.includes(tag);
var warn = (tag, prop, expected, actual) => console.warn(tag, `received incorrect value type for property '${prop}': expected `, typeof expected, `instead of `, typeof actual);
var error = (tag, prop, err) => console.error(`Could not set '${prop}' on '${tag}'`, err);

// src/pragma.tsx
function h(tag, properties, ...children) {
  const { window, document, Node: Node2 } = dom_default;
  if (typeof tag === "function") {
    return tag(properties ?? {}, children);
  }
  const element = isSvgTag(tag) ? document.createElementNS(SVG_XMLNS, tag) : document.createElement(tag);
  let map = properties ?? {};
  let prop;
  for (prop of Object.keys(map)) {
    prop = prop.toString();
    const value = map[prop];
    switch (prop) {
      case "style": {
        if (typeof value === "object") {
          for (const [k, v] of Object.entries(value)) {
            const styleProperty = k;
            if (typeof v !== "string") {
              continue;
            }
            element.style[styleProperty] = v;
          }
        } else if (typeof value === "string") {
          break;
        } else {
          warn(tag, prop, "object | string", value);
        }
        continue;
      }
    }
    if (prop.startsWith("on") && (prop.toLowerCase() in window)) {
      if (typeof value === "function") {
        element.addEventListener(prop.substring(2).toLowerCase(), map[prop]);
      } else {
        warn(tag, prop, "function", value);
      }
      continue;
    }
    try {
      const anyReference = element;
      if (typeof anyReference[prop] === "undefined") {
        element.setAttribute(prop, value);
      } else {
        anyReference[prop] = value;
      }
    } catch (err) {
      error(tag, prop, err);
    }
  }
  for (let child of children.flat()) {
    if (child instanceof Node2) {
      element.appendChild(child);
      continue;
    }
    if (typeof child !== "string" && child?.[Symbol.iterator]) {
      element.append(...child);
      continue;
    }
    element.append(child);
  }
  return element;
}
function Fragment(_, children) {
  return children;
}
var SVG_XMLNS = "http://www.w3.org/2000/svg";
var render = (element, container) => {
  container.innerHTML = "";
  for (let child of [element].flat()) {
    if (child instanceof Node) {
      container.appendChild(child);
      continue;
    }
    if (typeof element !== "string" && element?.[Symbol.iterator]) {
      container.append(...child);
      continue;
    }
    container.append(element);
  }
  return container;
};
var tsxh = h;
tsxh.Fragment = Fragment;
var pragma_default = tsxh;

// src/components/App.tsx
var App = () => {
  let clicks = 0;
  const getMessage = () => `I have been clicked ${clicks} time${clicks++ === 1 ? "" : "s"}`;
  let display = pragma_default("span", null, getMessage());
  return pragma_default(pragma_default.Fragment, null, pragma_default("div", {
    class: "app"
  }, pragma_default("button", null, display)));
};

// src/main.tsx
var { document } = dom_default;
render(pragma_default(App, null), document.querySelector("#app"));
