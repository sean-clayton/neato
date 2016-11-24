// @flow

import base from './base'
import pages from './pages'
import js from './babel'
import styles from './postcss'
import json from './json'
import files from './files'

export default (neatoConfig: NeatoConfigType) => [
  ...[
    base,
    pages,
    js,
    styles,
    json,
    files
  ].map((configFunction: Function): Object => configFunction(neatoConfig)),
  neatoConfig.options.webpack || {}
]
