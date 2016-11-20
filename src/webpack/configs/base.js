// @flow

import { NoErrorsPlugin } from 'webpack'

export default (neatoConfig: NeatoConfigType) => ({
  devtool: 'source-map',
  plugins: [
    new NoErrorsPlugin()
  ],
  resolve: {
    modules: []
  }
})
