import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: #f9f8f6;
    font-family: 'Open Sans', sans-serif;
    //overflow: hidden;
  }
 
  h1 {
    text-transform: uppercase;
    
    max-width: 40vw;
    color: #383838;
    @media (max-width: 768px) {
      padding: 15px 0;
    }
  }
  h2 {
    font-size: 1.3vw;
    text-transform: uppercase;
    color: #383838;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
  a {
    text-decoration: none;
    font-size: 21px;
    font-weight: bold;
  }
  li {
    list-style-type: none;
  }
  .admin-box {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 30px;
    .text-bold {
      font-weight: bold;
    }
  }
  .admin-data {
    max-width: 80%;
  }
  //.btn {
  //  margin-top: 10px;
  //  padding: 5px;
  //  transition: 0.3s;
  //  border: 1px solid #000;
  //  &:hover {
  //    color: #e6b022;
  //    border: 1px solid #e6b022;
  //    cursor: pointer;
  //  }
  //}
`;

export default GlobalStyle;