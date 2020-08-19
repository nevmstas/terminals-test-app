import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginForm } from './LoginForm'
import { authorizedUserT, setUserData, showNotFoundAlert, hideNotFoundAlert } from '../redux/authReducer'



export const Login = () =>{
    const dispatch = useDispatch()
    
    const onLogin = (userData : authorizedUserT) => {
        if(userData.userId === undefined){
            dispatch(showNotFoundAlert())
        }else{
            dispatch(setUserData(userData))
            dispatch(hideNotFoundAlert())
        }

    }
    
    return (
        <LoginForm onLogin = {onLogin}/>
    )
}