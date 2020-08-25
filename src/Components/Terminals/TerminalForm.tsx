import React from 'react'
import { useFormik } from 'formik';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { TerminalSchema } from './TerminalSchema';

type Props = {
    onAdd: (name: string, desc: string ) => void
}

export const TerminalForm: React.FC<Props> = ({ onAdd }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            description: ''
        },
        validationSchema: TerminalSchema,
        onSubmit: (values, actions) => {
            onAdd(values.name, values.description)
        }
    })

    return (
        <form 
            css={css`
                display:flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                top: 0;
                left: 400px;
                input{
                    width: 200px;
                    height: 40px;
                    margin-right: 20px;
                    border: 2px solid blueviolet;
                    border-radius: 10px;
                    outline: none;
                    padding: 5px;
                    &:focus{
                        box-shadow: 0 0 5px blueviolet;
                    }
                }
                button{
                    background-color: blueviolet;
                    border-radius: 10px;
                    color: white;
                    padding: 10px;
                    border: none;
                    &:hover{
                        background-color: #b152ff;
                        cursor: pointer;
                    }           
                }
                label{
                    margin-right: 10px;
                }
                
                @media screen and (max-width: 1200px) {
                   flex-direction:row;
                }
                
            `}
            onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name of terminal</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />   
                    </div>                 
                <button type="submit">Add</button>
            </form>
    )
}