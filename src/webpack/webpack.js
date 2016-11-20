// @flow

import merge from 'webpack-merge'
import configs from './configs/configs'

export const webpackConfig = (neatoConfig: NeatoConfigType) => merge.smart(...configs(neatoConfig), neatoConfig.options.webpack || {})

export default webpackConfig
