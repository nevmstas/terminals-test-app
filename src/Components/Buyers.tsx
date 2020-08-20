import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Buyer, sortByAverageCheck, sortByPurchases, sortByTotalRevenues } from '../redux/buyersReducer'

export const Buyers = () =>{
    const buyersList = useSelector((state : any) => state.buyer.buyers)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick ={()=>{dispatch(sortByAverageCheck())}}> sort by average</button>
            <button onClick ={()=>{dispatch(sortByPurchases())}}> sort by purchases</button>
            <button onClick ={()=>{dispatch(sortByTotalRevenues())}}> sort by total</button>

            {buyersList.map((b: Buyer) => <div>{b.name+' ' + b.averageCheck + ' ' + b.purchases + ' ' + b.totalRevenues}</div>)}
        </div>
    )
}