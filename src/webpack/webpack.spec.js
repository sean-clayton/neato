/* eslint-env jest */

import webpackConfig from './webpack'

describe('webpack', () => {
  it('Creates a webpack config object', () => {
    const neatoConfigMock = {
      options: {
        port: 3000,
        pages: ['index']
      }
    }
    expect(webpackConfig(neatoConfigMock)).toMatchSnapshot()
  })
})
