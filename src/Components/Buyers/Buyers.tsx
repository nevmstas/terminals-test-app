import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Buyer, sortByAverageCheck, sortByPurchases, sortByTotalRevenues } from '../../redux/buyersReducer'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/rootReducer'
import * as s from './styles'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Pagination } from '../Pagination'

export const Buyers = () =>{
    const [filter, setFilter] = useState<string>('')
    const buyersList = useSelector((state : RootState) => state.buyer.buyers)
    const dispatch = useDispatch()

    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [buyersPerPage, setBuyersPerPage] = useState(5)

    const indexOfLastBuyer = currentPage * buyersPerPage
    const indexOfFirstBuyer = indexOfLastBuyer - buyersPerPage
    const currentBuyers = buyersList.slice(indexOfFirstBuyer, indexOfLastBuyer)

    const handleInput = (event:React.FormEvent<HTMLInputElement>)=>{
        setFilter(event.currentTarget.value)
    }

    const paginate = (pageNumber: number) =>{
        setCurrentPage(pageNumber)
    }
    
    const changeBuyersPerPage= (e:any)=>{
        setCurrentPage(1)
        setBuyersPerPage(e.currentTarget.value)
    }

    return (
        <div>
            <h1>Buyers page</h1>
            <div css={css`
                margin: 20px 0 20px;
                button{
                    margin-top: 20px;
                    background-color: blueviolet;
                    border-radius: 10px;
                    color: white;
                    padding: 10px;
                    border: none;
                    &:hover{
                        background-color: #b152ff;
                        cursor: pointer;
                    }       
                }
            `}>
                <input className={"form-control"} type="text" placeholder="Search by name" onChange={handleInput} value={filter}/>
                <div css={css`
                    display: flex;
                    justify-content:space-between;
                `}>
                    <button onClick ={()=>{dispatch(sortByAverageCheck())}}>Sort by average</button>
                    <button onClick ={()=>{dispatch(sortByPurchases())}}>Sort by purchases</button>
                    <button onClick ={()=>{dispatch(sortByTotalRevenues())}}>Sort by total</button>
                </div>
                <Pagination 
                buyersPerPage={buyersPerPage} 
                totalBuyers={buyersList.length} 
                paginate={paginate} 
                currentPage={currentPage}
                changeBuyersPerPage={changeBuyersPerPage}/>
            </div>
           
            <table css={s.table}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Average check</th>
                    <th>Purchase number</th>
                    <th>Total Revenues</th>
                </tr>
                {currentBuyers.map((b: Buyer) =>{
                    return b.name.toUpperCase().startsWith(filter.toUpperCase())?
                        <tr key={b.id}>
                            <td><Link to={`/buyers/${b.id}`}>{b.id}</Link></td>
                            <td>{b.name}</td>
                            <td>{b.averageCheck}</td>
                            <td>{b.purchases}</td>
                            <td>{b.totalRevenues}</td>
                        </tr> : null                   
                })}
            </table>          
        </div>
    )
}