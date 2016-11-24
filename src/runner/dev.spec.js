/* eslint-env jest */

import { configHmrWebpackEntry } from './dev'

describe('dev server', () => {
  it('Generates the correct entry point', () => {
    const neatoConfig = {
      neatoPath: '/test/neato/path',
      projectPath: '/test/project/path',
      options: {
        pages: ['index', 'other-page'],
        port: 3000,
        vendor: ['a', 'b', 'c']
      }
    }
    expect(configHmrWebpackEntry(neatoConfig).entry).toMatchSnapshot()
  })
})
