// @flow

import base from './base'
import pages from './pages'

export default (neatoConfig: NeatoConfigType) => [
  ...[
    base,
    pages
  ].map((configFunction: Function): Object => configFunction(neatoConfig)),
  neatoConfig.options.webpack || {}
]
