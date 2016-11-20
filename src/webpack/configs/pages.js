// @flow

import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (neatoConfig: NeatoConfigType): Object => {
  const chunks = ['shared', 'vendor', 'webpack']
  return {
    output: {
      publicPath: '/',
      plugins: neatoConfig.options.pages
        ? neatoConfig.options.pages.map((page: string) => {
          if (chunks.indexOf(page) !== -1) { throw new Error(`Reserved name ${page}!`) }
          return new HtmlWebpackPlugin({
            template: `${page}.html`,
            hash: true,
            filename: `${page}.html`
          })
        })
        : []
    }
  }
}
