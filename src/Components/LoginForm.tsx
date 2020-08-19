import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .required('Required'),
  });


export const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }

    })
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">Login</label>
                <input
                    id="login"
                    name="login"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />
                <label htmlFor="lastName">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
    
}