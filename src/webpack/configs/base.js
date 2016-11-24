// @flow

import path from 'path'
import { NoErrorsPlugin } from 'webpack'

export default (neatoConfig: NeatoConfigType) => ({
  devtool: 'source-map',
  plugins: [
    new NoErrorsPlugin()
  ],
  resolve: {
    modules: [
      path.join(neatoConfig.projectPath, 'src'),
      path.join(neatoConfig.projectPath, 'node_modules'),
      path.join(neatoConfig.neatoPath, 'node_modules')
    ]
  }
})
