// @flow

import path from 'path'
import extensions from 'extensions'

export default (neato: NeatoConfigType) => ({
  module: {
    rules: [
      {
        test: extensions.test.file,
        include: [
          path.join(neato.projectPath, 'src')
        ],
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name]-[chunkhash].[ext]'
          }
        }
      }
    ]
  }
})
