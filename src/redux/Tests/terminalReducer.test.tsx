import * as reducer from '../terminalReducer'

describe('actions', () => {
    it('should create an action to add a terminal', () => {
      const terminal : reducer.Terminal = {
          id: 1,
          name: 'terminal-1',
          description: 'simple'
      }
      const expectedAction = {
        type: reducer.ADD_TERMINAL,
        payload: terminal
      }
      expect(reducer.addTerminal(terminal)).toEqual(expectedAction)
    })
  })

  