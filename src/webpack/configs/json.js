// @flow

import extensions from 'extensions'

export default (neatoConfig: NeatoConfigType) => ({
  module: {
    rules: [
      {
        use: 'json-loader',
        test: extensions.test.json
      }
    ]
  }
})
