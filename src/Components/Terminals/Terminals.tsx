import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import { TerminalT, addTerminal, deleteTerminal } from '../../redux/terminalReducer'
import { TerminalForm } from './TerminalForm';
import { Terminal } from './Terminal';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Terminals = () => {
    const terminalsList = useSelector(( state: RootState ) => state.terminal.terminals)
    const dispatch = useDispatch()

    const onAdd = ( name: string, desc: string ) =>{
        //fake id for test
        const testId = terminalsList.length + 1
        dispatch(addTerminal({ id: testId, name, description: desc }))
    }

    const onRemove = ( id: number ) =>{
        dispatch(deleteTerminal(id))
    }

    return (
        <div>
            <TerminalForm onAdd={onAdd}/>

            {terminalsList.map((t : TerminalT, index: number)  => {
                // return <div key = {index}>{t.name + ' ' + t.description} <button onClick={()=>{onRemove(t.id)}}>Remove</button></div>
                return <Terminal key = {index} id ={t.id} name = {t.name} description = {t.description} onRemove= {onRemove} />
            })}

        </div>
    ) 
}