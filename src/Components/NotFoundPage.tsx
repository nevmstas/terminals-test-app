import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import rickImg from '../imgs/rickPng.png'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const NotFoundPage = () => {
    let loaction = useLocation()
    
    return(
        <div css={css`
            position:absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: blueviolet;
            display: flex;
            justify-content: center;
            align-items: center;
        `}>
            <div css = {css`
                border-radius: 20px;
                background-color: #b152ff;
                color: white;
                padding: 30px;
                img{
                    height: 400px;
                }
                text-align: center;
            `}>
                <h1>Whoops!</h1>
                <img alt="rick" src={rickImg}/>
                <h1>Path <b>{loaction.pathname}</b> not found!</h1>
                <div css= {css`
                    border-radius: 20px;
                    background-color: #ff704d;
                    padding: 20px;
                    font-size: 30px;
                `}><Link to='/'>Go home</Link></div>
            </div>           
        </div>
    )
}