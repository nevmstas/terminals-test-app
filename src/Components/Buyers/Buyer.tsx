import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx, } from '@emotion/core'

export const Buyer = () =>{
    const { id } = useParams()
    const buyers = useSelector((state: any) => state.buyer.buyers)
    const [buyer, setBuyer] = useState<any>({})

    useEffect(() => {
        const buyer  = buyers.filter((b:any) => b.id === +id)
        setBuyer(buyer[0])
    }, [buyers, id])
    
    return (
        <div css={css`
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .4);
            z-index: 200;
            display: flex;
            justify-content: center;
            align-items: center;
        `}>
            <div css = {css`
                border-radius: 3px;
                background-color: white;
                z-index: 300;
                text-align: center;
                padding: 10px 50px;
                font-size: 25px;
                h4{
                    span{
                        color: blueviolet;
                    }
                }
            `}>
                <h2 css={css`
                    color: blueviolet;
                `}>{buyer.name}</h2>
                <hr />
                <h4>Average check: <span>{buyer.averageCheck}</span></h4>
                <h4>Purchase number: <span>{buyer.purchases}</span></h4>
                <h4>Total revenues: <span>{buyer.totalRevenues}</span></h4>
                <hr />
                <Link to='/buyers'>Ok</Link>
            </div>        
        </div>
    )
}