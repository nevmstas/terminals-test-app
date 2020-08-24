import React from 'react'
import { useFormik } from 'formik';
import  plusImg  from '../../imgs/lulu-plus.png'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

type Props = {
    onAdd: (name: string, desc: string ) => void
}

export const TerminalForm: React.FC<Props> = ({ onAdd }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            description: ''
        },
        onSubmit: (values, actions) => {
            onAdd(values.name, values.description)
        }
    })

    return (
        <form 
            css={css`
                display:flex;
                top: 0;
                left: 400px;
                input{
                    width: 50px;
                }
            `}
            onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Name of terminal</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />                    
                    <input type="image" src={plusImg} alt="Submit" />
                {/* <button src={plusImg} type="submit" /> */}
            </form>
    )
}