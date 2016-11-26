// @flow

import path from 'path'
import smartImport from 'postcss-smart-import'
import precss from 'precss'
import postCSSFlexbugsFixes from 'postcss-flexbugs-fixes'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import extensions from '../../extensions'

export default (neato: NeatoConfigType): Object => {
  type LoaderType = {
    loader: string,
    [queryParam: string]: any
  }

  const minifyOptions = neato.optimize
    ? {
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 version', 'ie >= 10']
      },
      discardComments: {
        removeAll: true
      },
      discardDuplicates: true,
      discardOverridden: true,
      colormin: true,
      convertValues: true,
      sourcemap: true
    }
    : { }

  const localCssLoaders: LoaderType[] = [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMaps: true,
        importLoaders: 1,
        localIdentName: neato.optimize ? '[name]_[local]__[hash:base64:5]' : '[path][name]_[local]__[hash:base64:5]',
        ...minifyOptions
      }
    },
    {
      loader: 'postcss-loader'
    }
  ]

  const globalCssLoaders: LoaderType[] = [
    {
      loader: 'css-loader',
      options: {
        sourceMaps: true,
        ...minifyOptions
      }
    },
    {
      loader: 'postcss-loader'
    }
  ]

  const shouldExtract = neato.options.pages && neato.options.pages.length > 0 && neato.action === 'BUILD'

  return {
    postcss: (webpack: any): Object => ({
      plugins: [
        smartImport({
          root: neato.projectPath,
          path: [
            path.resolve(neato.projectPath, 'src'),
            path.resolve(neato.projectPath, 'node_modules')
          ],
          addDependencyTo: webpack
        }),
        precss,
        postCSSFlexbugsFixes
      ]
    }),

    module: {
      rules: [
        {
          test: extensions.test.styles,
          include: path.resolve(neato.projectPath, 'src'),
          exclude: path.resolve(neato.projectPath, 'src/styles'),
          use: shouldExtract
            ? ExtractTextPlugin.extract(localCssLoaders)
            : [ { loader: 'style-loader' }, ...localCssLoaders ]
        },
        {
          test: extensions.test.styles,
          include: [
            path.resolve(neato.projectPath, 'src/styles'),
            path.resolve(neato.projectPath, 'node_modules')
          ],
          use: shouldExtract
            ? ExtractTextPlugin.extract(globalCssLoaders)
            : [ { loader: 'style-loader' }, ...globalCssLoaders ]
        }
      ]
    },

    plugins: neato.action === 'BUILD'
      ? [new ExtractTextPlugin({
        filename: '[name]-[chunkhash].css',
        allChunks: true
      })]
      : []
  }
}
