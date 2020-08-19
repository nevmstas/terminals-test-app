import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { authorizedUserT } from '../redux/authReducer';
import { useSelector }from 'react-redux'
import { RootState } from '../redux/rootReducer';

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
    onLogin: (userData : authorizedUserT) => void
}

export const LoginForm: React.FC<PropsType> = ({ onLogin }) => {

    const notFound = useSelector<RootState>(state => state.auth.notFound)
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: SignupSchema,
        onSubmit: async (values, actions) => {
            let response = await fetch(`https://api.github.com/users/${values.login}`);
            let data = await response.json();

            const userData : authorizedUserT = {
                userId: data.id,
                userLogin: data.login,
                avatarUrl: data.avatar_url
            }
            actions.resetForm()
            onLogin(userData)
            alert(JSON.stringify(data, null, 2))  
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
                <button type="submit">Login</button>
            </form>
            {notFound && <h1>User not found</h1>}
        </div>
    )
    
}