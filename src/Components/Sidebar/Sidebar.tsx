// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react'
import { Link } from "react-router-dom";
import * as s from './styles' 

type PropsT = {
    img: string
}

export const Sidebar: React.FC<PropsT> = ({ img }) =>{
    return (
        <nav css ={s.navigation}>
            <img alt='gh-avatar' src={img} />
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>            
                <li>
                <Link to="/terminals">Terminal</Link>
                </li>
                <li>
                <Link to="/buyers">Buyer</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
            <div css = {s.footer}>
                Copyright @2020
            </div>
        </nav>
    )
}