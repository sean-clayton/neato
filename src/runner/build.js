// @flow

import webpack from 'webpack'
import neato from '../index'

export default (neatoConfig: NeatoConfigType) => new Promise((resolve: Function, reject: Function) => {
  const compiler = webpack(neato.webpackConfig)

  compiler.run((err: any, stats: Object) => {
    if (err || stats.toJson().errors) {
      if (err) {
        console.error(err.stack || err)
        if (err.details) {
          console.error(err.details)
        }
      }
      if (stats.toJson().errors) {
        stats.toJson().errors.forEach((error: any) => {
          console.error(error)
        })
      }
      reject()
    } else {
      console.log('Done!')
      console.log(stats.toString({
        colors: true,
        chunks: false
      }))
      resolve()
    }
  })
})
