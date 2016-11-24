/* eslint-env jest */

import webpackConfig from './webpack'

describe('webpack', () => {
  xit('Creates a webpack config object', () => {
    const neatoConfigMock = {
      neatoPath: '/test/neato/path',
      projectPath: '/test/project/path',
      options: {
        port: 3000,
        pages: ['index']
      }
    }
    expect(webpackConfig(neatoConfigMock)).toMatchSnapshot()
  })

  xit('Accepts a custom config', () => {
    const neatoConfigMock = {
      neatoPath: '/test/neato/path',
      projectPath: '/test/project/path',
      options: {
        port: 3000,
        pages: ['index'],
        webpack: {
          output: {
            publicPath: 'https://cdn.com/'
          }
        }
      }
    }
    expect(webpackConfig(neatoConfigMock)).toMatchSnapshot()
  })

  xit('Builds a dev webpack config', () => {
    const neatoConfigMock = {
      neatoPath: '/test/neato/path',
      projectPath: '/test/project/path',
      action: 'DEV',
      options: {
        port: 3000,
        pages: ['index']
      }
    }
    expect(webpackConfig(neatoConfigMock)).toMatchSnapshot()
  })
})
