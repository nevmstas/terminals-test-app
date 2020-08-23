import { css } from '@emotion/core'

export const container = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const formContainer = css`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 3px;
    box-shadow: 0 0 5px black;
    text-align: center;
    color: blueviolet;
    font-size: 20px;
`
export const inputErr = css`
    border: 3px solid red;
`
export const form = css`
    display:flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 20px;

    input{
        border: 2px solid blueviolet;
        margin-bottom: 20px;
        padding: 5px;
        border-radius: 5px; 
        outline: none;    
    }
    label{
        margin-bottom: 10px;
    }
    button{
        background-color: hotpink;
        border-radius: 4px;
        color: white;
        border: none;
        padding: 10px;
        font-weight: bold;
        transition: all .2s;
        font-size: 20px;
        &:disabled{
            background-color: lightgrey !important;
            color:#4d4d4d !important;
            cursor: not-allowed !important;
        }
        &:hover{
            cursor: pointer;
            background-color: #FFA5D2;
        }
    }
`
export const errorContainer = css`   
    width: 300px;
    height: 50px;
    background-color:  #ff8080;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 10px;
    text-align: center;
`