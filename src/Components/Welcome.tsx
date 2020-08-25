import React from 'react'
import ghIcon from './../imgs/ghicon.webp'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Welcome = () =>{
    return <div css={css`
        text-align: center;     
        margin-top: 20px;
        h1{
            color: blueviolet;
            b{
                color: #211F1F;
            }
        }
        img{
            width: 50px;
            margin-bottom: 20px;
        }
    `}><h1><a href='https://github.com/nevmstas'><img src={ghIcon} /> <b>https://github.com/nevmstas</b></a></h1></div>
}