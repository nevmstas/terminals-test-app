// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react'
import { useFormik } from 'formik';
import { SignupSchema } from './SingupSchema'

import * as s from './styles'



type PropsType = {
    onLogin: (userName : string) => void
    error: string
}

export const LoginForm: React.FC<PropsType> = ({ onLogin, error }) => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: SignupSchema,
        onSubmit: (values, actions) => {
            onLogin(values.login)
            actions.resetForm()
        }
    })
    
    return (

        <div css = {s.container}>
            <div css={s.formContainer}>              
                <form css = {s.form} onSubmit={formik.handleSubmit}>
                    <label htmlFor="login">Login</label>
                    <input
                        style ={{border:formik.errors.login ? '2px solid red': '2px solid blueviolet'}}
                        id="login"
                        name="login"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.login}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        style ={{border:formik.errors.password ? '2px solid red': '2px solid blueviolet'}}
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <button disabled={!!formik.errors.password} type="submit">Login</button>                  
                </form>
            </div>
            <div style = {{opacity: (formik.errors.password || error)? '100%': '0%'}} css={s.errorContainer}>
                    {formik.errors.password && <div>{formik.errors.password}</div>}
                    {error && <div>{error}</div>}
            </div>
        </div>
    )  
}