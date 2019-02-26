import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import App from './App';

const StyledGlobal = createGlobalStyle`
  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }
  `;

ReactDOM.render(
  <React.Fragment>
    <App />
    <StyledGlobal />
  </React.Fragment>,
  document.getElementById('root')
);
