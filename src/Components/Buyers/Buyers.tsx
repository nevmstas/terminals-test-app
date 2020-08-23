import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Buyer, sortByAverageCheck, sortByPurchases, sortByTotalRevenues } from '../../redux/buyersReducer'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/rootReducer'
import * as s from './styles'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'

export const Buyers = () =>{
    const [filter, setFilter] = useState<string>('')
    const buyersList = useSelector((state : RootState) => state.buyer.buyers)
    const dispatch = useDispatch()

    const handleInput = (event:React.FormEvent<HTMLInputElement>)=>{
        setFilter(event.currentTarget.value)
    }

    return (
        <div>
            <input type='text' onChange={handleInput} value={filter}/>
            <button onClick ={()=>{dispatch(sortByAverageCheck())}}>sort by average</button>
            <button onClick ={()=>{dispatch(sortByPurchases())}}>sort by purchases</button>
            <button onClick ={()=>{dispatch(sortByTotalRevenues())}}>sort by total</button>
            <table css={s.table}>
                <tr>
                    <th>ID</th>
                    <th>Average check</th>
                    <th>Purchase number</th>
                    <th>Total Revenues</th>
                </tr>
                {buyersList.map((b: Buyer) =>{
                    return b.name.toUpperCase().startsWith(filter.toUpperCase())?
                        <tr key={b.id}>
                            <td><Link to={`/buyers/${b.id}`}>{b.id}</Link></td>
                            <td>{b.name}</td>
                            <td>{b.purchases}</td>
                            <td>{b.totalRevenues}</td>
                        </tr> : null                   
                })}
            </table>
        </div>
    )
}