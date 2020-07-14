import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./Images/BG-img.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
background-image: url(${BGImage});
background-size: cover;
font-family: 'Roboto', sans-serif;
margin: 0px;
padding: 0 2px;
display: flex;
justify-content: center;
}

* {
    box-sizing: border-box;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 1.8rem;
    margin: 0px;
  }
  h1 {
    background-image: linear-gradient(100deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-family: "Lobster", cursive;
    font-size: 5rem;
    font-weight: lighter;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180 deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
  .footer {
    position: absolute;
    bottom: 10px;
    color: #ecf0f1;

    > a {
      color: #ecf0f1;
      text-decoration: none;
    }
  }
`;
