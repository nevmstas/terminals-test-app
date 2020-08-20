import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short! Must Contain 8 Characters')
      .required('Required')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Must have one number and one letter!")
  });

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
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="login">Login</label>
                <input
                    id="login"
                    name="login"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && <h3>{formik.errors.password}</h3>}
                {error && <h3>{error}</h3>}
                <button type="submit">Login</button>
            </form>
        </div>
    )
    
}