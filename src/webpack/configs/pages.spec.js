/* eslint-env jest */

import pages from './pages'

describe('webpack/pages', () => {
  it('works', () => {
    const neatoMock = {
      options: {
        pages: ['index', 'other-page']
      }
    }
    expect(pages(neatoMock)).toMatchSnapshot()
  })
})
