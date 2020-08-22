import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Buyer, sortByAverageCheck, sortByPurchases, sortByTotalRevenues } from '../redux/buyersReducer'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/rootReducer'

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
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Average check</th>
                        <th>Purchase number</th>
                        <th>Total Revenues</th>
                    </tr>
                </thead>
                <tbody>
                    {buyersList.map((b: Buyer) =>{
                        return b.name.toUpperCase().startsWith(filter.toUpperCase())?
                            <tr key={b.id}>
                                <td><Link to={`/buyers/${b.id}`}>{b.id}</Link></td>
                                <td>{b.name}</td>
                                <td>{b.purchases}</td>
                                <td>{b.totalRevenues}</td>
                            </tr> : null                   
                    })}
                </tbody>
            </table>
        </div>
    )
}