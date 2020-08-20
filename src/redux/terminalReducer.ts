export const ADD_TERMINAL = 'TERMINAL/ADD_TERMINAL'
export const DELETE_TERMINAL = 'TERMINAL/DELETE_TERMINAL'

export type Terminal = {
    id: number
    name: string 
    description: string
}
export type initialStateType = {
    terminals: Array<Terminal>
}


const InitialState: initialStateType= {
    terminals: [
        {id: 1, name: 'Terminal-1', description: 'Simple'},
        {id: 2, name: 'Terminal-2', description: 'Large'},
    ]
}

export const terminalReducer = (state = InitialState, action: any) : initialStateType =>{
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

export const addTerminal = (terminal : Terminal) =>{
    return {
        type: ADD_TERMINAL,
        payload: terminal
    }
}

export const deleteTerminal = (id : number) =>{
    return {
        type: DELETE_TERMINAL,
        payload: id
    }
}