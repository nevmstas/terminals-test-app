// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'


export const table = css`
    td, th{
        border: 1px solid #ddd;
        padding: 8px;
    }
    
    tr:nth-child(even){
        background-color: #f2f2f2;
    }

    tr:hover{
        background-color: #ddd;
    }

    th{
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: blueviolet;
        color: white;    
    }
`