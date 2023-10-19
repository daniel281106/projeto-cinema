import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`

::root{
  font-size: 62,5%;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', Sans-Serif;
    font-size: 16px;
    background-color: rgb(15,15,15);
  }

`; 

export default global;