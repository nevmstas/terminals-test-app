import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginForm } from './LoginForm'
import { authorizedUserT, setUserData, addError } from '../redux/authReducer'



export const Login = () =>{
    const dispatch = useDispatch()
    
    const onLogin = (userData : authorizedUserT) => {
        dispatch(setUserData(userData))
    }
    
    return (
        <LoginForm onLogin = {onLogin}/>
    )
}