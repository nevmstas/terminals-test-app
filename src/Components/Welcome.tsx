import React from 'react'
import ghIcon from './../imgs/ghicon.webp'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Welcome = () =>{
    return <div css={css`
        margin-top: 30px;
        h1{
            color: blueviolet;
            b{
                color: #211F1F;
            }
        }
        img{
            width: 50px;
        }
    `}><h1><a href='https://github.com/nevmstas'><img src={ghIcon} /> <b>https://github.com/nevmstas</b></a></h1></div>
}