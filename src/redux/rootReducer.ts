import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { terminalReducer } from './terminalReducer'
import { buyersReducer } from './buyersReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    terminal: terminalReducer,
    buyer: buyersReducer
})

export type RootState = ReturnType<typeof rootReducer>