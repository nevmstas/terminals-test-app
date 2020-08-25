import * as reducer from '../terminalReducer'
import { Terminal } from '../../Components/Terminals/Terminal'

describe('actions', () => {
    it('should create an action to add a terminal', () => {
      const terminal : reducer.TerminalT = {
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

    it('should create an action to delete a terminal', () => {
      const id : number = 1
      const expectedAction = {
        type: reducer.DELETE_TERMINAL,
        payload: id
      }
      expect(reducer.deleteTerminal(id)).toEqual(expectedAction)
    })
  })



  