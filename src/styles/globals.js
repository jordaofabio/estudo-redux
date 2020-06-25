import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

#root {
  max-width: 1640px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 20px 50px;
}

body {
  background: #FFF;
  color:#333;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: #222;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}
`;
