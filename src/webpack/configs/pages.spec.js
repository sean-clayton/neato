/* eslint-env jest */

import pages from './pages'

describe('webpack/pages', () => {
  it('works', () => {
    const neatoMock = {
      neatoPath: '/test/neato/path',
      projectPath: '/test/project/path',
      optimize: false,
      options: {
        pages: ['index', 'other-page']
      }
    }
    expect(pages(neatoMock)).toMatchSnapshot()
  })
})
