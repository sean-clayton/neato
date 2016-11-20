// @flow

import path from 'path'
import webpackConfig from './webpack/webpack'
import cli from 'cli/cli'

const defaultOptions: NeatoOptionsType = {
  port: 3000
}

export const neatoConfig: NeatoConfigType = {
  options: {
    ...defaultOptions
  },
  neatoPath: path.join(__dirname, '../'),
  projectPath: process.env.NEATO_LINK
    ? process.cwd()
    : path.join(__dirname, '../../../')
}

export default {
  cli,
  webpackConfig: webpackConfig(neatoConfig)
}
