// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";
import * as s from './styles' 

type PropsT = {
    img: string
}

export const Sidebar: React.FC<PropsT> = ({ img }) =>{
    return (
        <nav css ={s.navigation}>
            <img alt='gh-avatar' src={img} />
            <div>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName={"active"}>Home</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/buyers" activeClassName={"active"}>Buyer</NavLink>
                    </li>         
                    <li>
                        <NavLink to="/terminals" activeClassName={"active"}>Terminal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName={"active"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/test" activeClassName={"active"}>Test</NavLink>
                    </li>
                </ul>
            </div>
            <div css = {s.footer}>
                Copyright @2020
            </div>
        </nav>
    )
}