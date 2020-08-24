import React from 'react'


// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

type TProps = {
    buyersPerPage: number
    totalBuyers: number
    paginate: (n: number) => void
    currentPage: number
    changeBuyersPerPage: (e:any)=>void
}

export const Pagination: React.FC<TProps> = ({buyersPerPage, totalBuyers, paginate, currentPage, changeBuyersPerPage}) =>{
    const pageNumbers = []
    
    for(let i = 1; i <= Math.ceil(totalBuyers / buyersPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div css={css`
            margin-top: 20px;
            display: flex;
            justify-content:space-between;
        `}>
            <div css={css`

                display: inline-block;
                a {
                    color: black;
                    float: left;
                    padding: 8px 16px;
                    text-decoration: none;
                    transition: background-color .3s;
                }

                a.active {
                    background-color: blueviolet;
                    color: white;
                }
                a:hover:not(.active) {
                    background-color: #ddd;
                    cursor: pointer;
                }
            `}>
                <div>
                    {/* <a href="#">&laquo;</a> */}
                    {pageNumbers.map(n => (
                        <a className ={currentPage === n ?"active" : ""} key={n} onClick={() => paginate(n)} >{n}</a>
                    ))}
                    {/* <a href="#">&raquo;</a> */}
                </div>
            </div>

            <select onChange={changeBuyersPerPage}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
            </select>
        </div>
    )
}