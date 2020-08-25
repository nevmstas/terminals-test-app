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
    const location = useLocation()
    return (
        <nav css ={s.navigation}>
            <img alt='gh-avatar' src={img} />
                <ul>
                    <li>
                        <NavLink exact to="/" activeStyle={{
                            color: "hotpink"
                        }}>Home</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/buyers" activeStyle={{
                            color: "hotpink"
                        }}>Buyer</NavLink>
                    </li>         
                    <li>
                        <NavLink to="/terminals" activeStyle={{
                            color: "hotpink"
                        }}>Terminal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/test" activeStyle={{
                            fontWeight: "bold",
                            color: "hotpink"
                        }}>Test</NavLink>
                    </li>
                    <li>
                        <NavLink to="/test2" activeStyle={{
                            fontWeight: "bold",
                            color: "hotpink"
                        }}>Test2</NavLink>
                    </li>
                </ul>
            <div css = {s.footer}>
                Copyright @2020
            </div>
        </nav>
    )
}