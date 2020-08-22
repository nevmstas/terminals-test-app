import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NotFoundPage = () => {
    let loaction = useLocation()
    return(
        <div>
            <h1>404</h1>
            <h1>{loaction.pathname}</h1>
            <Link to='/'>Go home!</Link>
        </div>
    )
}