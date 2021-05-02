import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html, body {
  width: 100%;
  height: 100vh;
}

#root{
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing:border-box;
}

body,button  {
font: 400 16px "Montserrat", sans-serif;

  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
  outline: none;
  border: none;
}
img {
  max-width: 100%;
}
`;
