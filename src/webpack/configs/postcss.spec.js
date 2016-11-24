/* eslint-env jest */

import postcss from './postcss'

describe('postcss config', () => {
  it('Generates a postcss-loader config', () => {
    const neatoMock = {
      neatoPath: '/test/neato/path',
      projectPath: '/test/project/path',
      optimize: false,
      options: {
        pages: ['index', 'other-page']
      },
      action: 'DEV'
    }
    expect(postcss(neatoMock)).toMatchSnapshot()
  })
})
