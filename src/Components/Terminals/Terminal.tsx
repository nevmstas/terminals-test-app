import React from 'react'
import deleteImg from '../../imgs/deleteBtn.png'


// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

type TProps = {
    id: number
    name: string
    description: string
    onRemove: (id: number) => void
}
export const Terminal: React.FC<TProps> = ({id, name, description, onRemove}) =>{
    return <div css={css`
        display: flex;
        justify-content: space-between;
        border-radius: 3px;
        box-shadow: 0 0 5px black;
        margin: 20px 20px;
        padding: 30px;
        img{
            cursor: pointer;
            width: 50px;
        }
    `}>
        <div>
            <h3>{name}</h3>
            <h4>{description}</h4>
        </div>
        <img src={deleteImg} onClick={() => onRemove(id)}/>
    </div>
}