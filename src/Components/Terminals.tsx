import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/rootReducer'
import { Terminal, addTerminal, deleteTerminal } from '../redux/terminalReducer'
import { TerminalForm } from './TerminalForm';

export const Terminals = () => {
    const terminalsList = useSelector(( state: any ) => state.terminal.terminals)
    const dispatch = useDispatch()

    const onAdd = ( name: string, desc: string ) =>{
        const testId = terminalsList.length + 1

        dispatch(addTerminal({ id: testId, name, description: desc }))
    }

    const onRemove = ( id: number ) =>{
        dispatch(deleteTerminal(id))
    }

    return (
        <div>
            <TerminalForm onAdd={onAdd}/>

            {terminalsList.map((t : Terminal, index: number)  => {
                return <div key = {index}>{t.name + ' ' + t.description} <button onClick={()=>{onRemove(t.id)}}>Remove</button></div>
            })}

        </div>
    ) 
}