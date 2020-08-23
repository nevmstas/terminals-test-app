import { css } from "@emotion/core";

export const navigation = css`
  margin: 0;
  padding: 0;
  background: blueviolet;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  font-size: 40px;
  width: 300px;
  height: 100%;
  position: fixed;
  overflow: auto;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: auto;
    position: relative;
    text-align: center;
  }
  a {
    margin-left: 20px;
    margin-top: 20px;
    display: block;
    text-decoration: none;
    color: white;
    transition: all 0.2s;
    &:hover {
      transform: translateX(10px);
      text-decoration-line: 1px;
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
    bottom: 10px;
    border: 1px solid black;
    align-self: flex-end;
`;

