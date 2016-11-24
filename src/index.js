// @flow

import path from 'path'
import webpackConfig from './webpack/webpack'
import cli from './cli/cli'
import run from './runner/runner'
import { version } from '../package.json'

const defaultOptions: NeatoOptionsType = {
  port: 3000
}

const projectPath = process.env.NEATO_LINK
  ? process.cwd()
  : path.join(__dirname, '../../../')

export const neatoConfig: NeatoConfigType = {
  options: {
    ...defaultOptions,
    ...require.resolve(projectPath, 'neato.config.js') || {}
  },
  optimize: false,
  neatoPath: path.join(__dirname, '../'),
  projectPath
}

export default {
  version,
  cli,
  webpackConfig: webpackConfig(neatoConfig),
  run
}
