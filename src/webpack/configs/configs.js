// @flow

import base from './base'
import pages from './pages'
import js from './babel'
import styles from './postcss'
import json from './json'

export default (neatoConfig: NeatoConfigType) => [
  ...[
    base,
    pages,
    js,
    styles,
    json
  ].map((configFunction: Function): Object => configFunction(neatoConfig)),
  neatoConfig.options.webpack || {}
]
