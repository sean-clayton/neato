// @flow

import HtmlWebpackPlugin from 'html-webpack-plugin'
import { optimize } from 'webpack'
import path from 'path'

export default (neatoConfig: NeatoConfigType): Object => {
  const chunks = ['shared', 'vendor', 'webpack']

  const configurePlugins = (): any[] => {
    return [
      ...(neatoConfig.options.pages
        ? neatoConfig.options.pages.map((page: string) => {
          if (chunks.indexOf(page) !== -1) { return new Error(`Reserved name ${page}!`) }
          return new HtmlWebpackPlugin({
            template: `${page}.html`,
            hash: true,
            filename: `${page}.html`
          })
        })
        : []
      ),
      new optimize.CommonsChunkPlugin({
        name: chunks
      })
    ]
  }

  const entry = {
    ...(neatoConfig.options.pages
      ? neatoConfig.options.pages
        .map((page: string) => ({
          [page]: `./${page}`
        }))
        .reduce((a, b) => ({
          ...a,
          ...b
        }))
      : {}),
    vendor: neatoConfig.options.vendor || []
  }

  return neatoConfig.options.pages && neatoConfig.options.pages.length === 0
    ? new Error('Could not find page. Did you forget to set the `pages` option in your neato.config.js file?')
    : {
      output: {
        publicPath: '/',
        path: path.join(neatoConfig.projectPath, 'dist'),
        filename: neatoConfig.optimize ? '[name]-[chunkhash].js' : '[name]-[hash].js',
        chunkFilename: neatoConfig.optimize ? '[name]-[chunkhash].chunk.js' : '[name]-[hash].chunk.js'
      },
      plugins: configurePlugins(),
      entry
    }
}
