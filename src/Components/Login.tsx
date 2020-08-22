import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginForm } from './LoginForm'
import { authUser } from '../redux/authReducer'
import { RootState } from '../redux/rootReducer'



export const Login = () =>{
    const dispatch = useDispatch()
    const error = useSelector(( state: RootState ) => state.auth.error)
    
    const onLogin = (userName : string) => {
        dispatch(authUser(userName))
    }
    
    return (
        <LoginForm onLogin = {onLogin} error = {error}/>
    )
}