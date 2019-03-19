import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import IndexPage from "./pages/Index";
import AdminPage from "./pages/Admin";

import { Provider } from "./RootContext";

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

  html, body {
    margin: 0;
    padding: 0;
    color: #333;
    font-family: 'Noto Sans JP', sans-serif;
    -webkit-app-region: drag;
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;
    background: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const ws = new WebSocket("ws://127.0.0.1:5001");

ws.onopen = (e: any) => {
  console.log("Opened !");
};

ReactDOM.render(
  <Provider
    value={{
      ws
    }}
  >
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={IndexPage} />
        <Route path="/admin" component={AdminPage} />
        <StyledGlobal />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
