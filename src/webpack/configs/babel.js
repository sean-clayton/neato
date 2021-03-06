// @flow

import path from 'path'
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack'
import extensions from '../../extensions'

export default (neatoConfig: NeatoConfigType): Object => ({
  babel: {
    babelrc: path.join(neatoConfig.projectPath)
  },

  plugins: neatoConfig.action === 'DEV' ? [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin()
  ] : [],

  resolve: {
    extensions: extensions.list.javascript
  },

  module: {
    rules: [
      {
        test: extensions.test.javascript,
        include: [
          path.join(neatoConfig.projectPath, 'src')
        ],
        use: 'babel-loader'
      }
    ]
  }
})
