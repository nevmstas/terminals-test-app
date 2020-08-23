export const ADD_TERMINAL = 'TERMINAL/ADD_TERMINAL'
export const DELETE_TERMINAL = 'TERMINAL/DELETE_TERMINAL'

export type TerminalT = {
    id: number
    name: string 
    description: string
}
export type initialStateType = {
    terminals: Array<TerminalT>
}

const InitialState: initialStateType= {
    terminals: [
        {id: 1, name: 'Terminal-1', description: 'Simple'},
        {id: 2, name: 'Terminal-2', description: 'Large'},
    ]
}

type TerminalActionType = AddTerminalT | DeleteTerminalT

export const terminalReducer = (state = InitialState, action: TerminalActionType) : initialStateType =>{
    switch (action.type) {
        case ADD_TERMINAL:     
            return {
                ...state,
                terminals: [...state.terminals, action.payload]
            }
        case DELETE_TERMINAL:
            return{
                ...state,
                terminals: [...state.terminals.filter(f => f.id !== action.payload)]               
            }
        default:
            return state
    }
}

type AddTerminalT = {
    type: typeof ADD_TERMINAL,
    payload: TerminalT
}

export const addTerminal = (terminal : TerminalT) : AddTerminalT =>{
    return {
        type: ADD_TERMINAL,
        payload: terminal
    }
}

type DeleteTerminalT = {
    type: typeof DELETE_TERMINAL,
    payload: number
}

export const deleteTerminal = (id : number) : DeleteTerminalT=>{
    return {
        type: DELETE_TERMINAL,
        payload: id
    }
}