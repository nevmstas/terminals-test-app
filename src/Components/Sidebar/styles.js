import { css } from "@emotion/core";

export const navigation = css`
  display: flex;
  margin: 0;
  padding: 0;
  background: linear-gradient(blueviolet 60%, hotpink);
  flex-direction: column;
  list-style: none;
  font-size: 30px;
  width: 300px;
  height: 100%;
  position: fixed;
  overflow: auto;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: auto;
    position: relative;
    text-align: center;
    img{
      align-self:center;
    }
  }
  li{
    transition: all .3s;
    &:hover{
      background-color:#b152ff;
    }
  }
  a {
    margin-left: 20px;
    margin-top: 20px;
    display: block;
    text-decoration: none;
    color: white;
    transition: all 0.2s;
    &:active{
      color: hotpink;
    }
  }
  img {

    width: 10rem;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 50%;
  }
`;

export const footer = css`
    background-color: black;
    padding: 10px;
    color: white;
    margin-top: auto;
`;

