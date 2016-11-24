/* eslint-env jest */

import babel from './babel'

describe('babel config', () => {
  xit('Generates a babel-loader config', () => {
    const neatoMock = {
      neatoPath: '/test/neato/path',
      projectPath: '/test/project/path',
      optimize: false,
      options: {
        pages: ['index', 'other-page']
      },
      action: 'DEV'
    }
    expect(babel(neatoMock)).toMatchSnapshot()
  })
})
