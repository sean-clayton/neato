/* eslint-env jest */

import log, { info, debug, warning, error } from './log'

describe('log helper', () => {
  it('Logs a normal log', () => {
    expect(log('Hi!')).toBeUndefined()
  })

  it('Logs info', () => {
    expect(info(1, 2)).toBeUndefined()
  })

  it('Debugs', () => {
    expect(debug({}, 1 !== 2)).toBeUndefined()
  })

  it('Warns', () => {
    expect(warning('Oh no!', `There's a snake in my boot!`)).toBeUndefined()
  })

  it('Prints error-looking logs', () => {
    expect(error('I wouldve gotten away with it, too!')).toBeUndefined()
  })

  it('Supports multiple logs', () => {
    expect(log('Hi', 'there!')).toBeUndefined()
  })
})
