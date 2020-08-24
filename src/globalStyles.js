import { css } from "@emotion/core";

export const global = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }
  body {
    box-sizing: border-box;
    background-color: white;
  }
`;

export const page = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 300px;
  height: 100%;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    margin-left: 0;
  }
`;