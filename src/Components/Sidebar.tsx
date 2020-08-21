import React from 'react'
import { Link } from "react-router-dom";

type PropsT = {
    img: string
}

export const Sidebar: React.FC<PropsT> = ({ img }) =>{
    return (
        <nav>
            <img alt='gh-avatar' src={img} />
            <ul>              
                <li>
                <Link to="/terminals">Terminal</Link>
                </li>
                <li>
                <Link to="/buyers">Buyer</Link>
                </li>
                <li>
                <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}