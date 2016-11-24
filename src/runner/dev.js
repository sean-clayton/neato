// @flow

import webpack from 'webpack'
import Server from 'webpack-dev-server'
import webpackConfig from '../webpack/webpack'

export const configHmrWebpackEntry = (neatoConfig: NeatoConfigType): Object => {
  const entry = webpackConfig(neatoConfig).entry

  const hmrEntries = [
    `${require.resolve('webpack-dev-server/client/')}?http://0.0.0.0:${neatoConfig.options.port}`,
    'webpack/hot/only-dev-server'
  ]

  const newEntry = () => {
    if (typeof entry === 'object' && !Array.isArray(entry)) {
      return Object.keys(entry).reduce((entries, key) => ({
        ...entries,
        [key]: hmrEntries.concat(entry[key])
      }), {})
    } else {
      return hmrEntries.concat(entry)
    }
  }

  return {
    ...webpackConfig(neatoConfig),
    entry: newEntry()
  }
}

export default (neatoConfig: NeatoConfigType): Promise<*> => new Promise((resolve: Function, reject: Function) => {
  const userDevServerConfig = neatoConfig.options.webpack && neatoConfig.options.webpack.devServer
    ? neatoConfig.options.webpack.devServer
    : {}

  const devServerConfig = {
    inline: true,
    hot: true,
    historyApiFallback: neatoConfig.options.pages && neatoConfig.options.pages[0] && `${neatoConfig.options.pages[0]}.html`,
    stats: {
      colors: true,
      chunks: false,
      noInfo: true
    },
    ...userDevServerConfig
  }

  try {
    new Server(webpack(configHmrWebpackEntry(neatoConfig)), devServerConfig).listen(neatoConfig.options.port, '0.0.0.0', (err: any) => {
      if (err) {
        console.error(`Server failed to start at http://0.0.0.0:${neatoConfig.options.port}`)
        console.error(err)
      } else {
        console.log(`Server started at http://localhost:${neatoConfig.options.port}/webpack-dev-server/`)
      }
    })
  } catch (e) {
    reject(e)
  }
})
