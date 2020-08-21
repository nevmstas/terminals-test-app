import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Buyer, sortByAverageCheck, sortByPurchases, sortByTotalRevenues, filterByName } from '../redux/buyersReducer'
import { Link } from 'react-router-dom'

export const Buyers = () =>{
    //const [name, setName] = useState('')
    const buyersList = useSelector((state : any) => state.buyer.buyers)
    const buyersListFil = useSelector((state : any) => state.buyer.filteredItems)
    const dispatch = useDispatch()

    const handleInput = (event:any)=>{
        //setName(event.target.value)
        dispatch(filterByName(event.target.value))
    }
    return (
        <div>
            <input type='text' onChange={handleInput}/>
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
                    {buyersListFil.map((b: Buyer) =>{
                        return <tr key={b.id}>
                                <td><Link to={`/buyers/${b.id}`}>{b.id}</Link></td>
                                <td>{b.name}</td>
                                <td>{b.purchases}</td>
                                <td>{b.totalRevenues}</td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}