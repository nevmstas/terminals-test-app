import React from 'react'
import { useFormik } from 'formik';

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
        <form onSubmit={formik.handleSubmit}>
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
                <button type="submit">Add</button>
            </form>
    )
}