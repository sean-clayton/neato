// @flow

import base from './base'
import pages from './pages'
import babel from './babel'

export default (neatoConfig: NeatoConfigType) => [
  ...[
    base,
    pages,
    babel
  ].map((configFunction: Function): Object => configFunction(neatoConfig)),
  neatoConfig.options.webpack || {}
]
