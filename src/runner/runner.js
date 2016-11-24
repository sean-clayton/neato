// @flow

import actions from 'actions'
import init from './init'
import build from './build'
import dev from './dev'
import lint from './lint'

export default (neato: NeatoConfigType): Promise<*> => {
  switch (neato.action) {
    case actions.init:
      return init(neato)
    case actions.build:
      return build(neato)
    case actions.dev:
      return dev(neato)
    case actions.lint:
      return lint(neato)
    default:
      return Promise.reject('A valid action is required! eg. neato build, neato dev, or neato lint')
  }
}
