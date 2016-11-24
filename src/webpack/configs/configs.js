// @flow

import base from './base'
import pages from './pages'
import js from './babel'
import styles from './postcss'

export default (neatoConfig: NeatoConfigType) => [
  ...[
    base,
    pages,
    js,
    styles
  ].map((configFunction: Function): Object => configFunction(neatoConfig)),
  neatoConfig.options.webpack || {}
]
