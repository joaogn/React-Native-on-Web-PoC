import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body { height: 100%; }

  body {
    overflow: hidden;
    color: ${props => props.theme.white};
    font-family: 'Roboto';
    background:${props => props.theme.background};
  }

  #root { display:flex; height:100%; }

  button {
    cursor: pointer;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  @media (max-width: 1080px){
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 54%;
    }
  }

  .Toastify__toast--error {
    background: ${props => props.theme.red};
 }

`;
