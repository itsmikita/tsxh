class DOM {
  private _window: Window | null = null
  private _document: Document | null = null
  private _node: any

  set window( w: Window ) {
    this._window = w
  }

  get window() {
    return this._window ?? globalThis.window
  }

  set document( d: Document ) {
    this._document = d
  }

  get document() {
    return this._document ?? globalThis.document
  }

  set Node( n: any ) {
    this._node = n
  }

  get Node() {
    return this._node ?? globalThis.Node
  }

  useGlobalWindow() {
    this._window = null
  }

  useGlobalDocument() {
    this._document = null
  }

  useGlobalNode() {
    this._node = null
  }
}

export default new DOM()