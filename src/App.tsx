import React from 'react';
import styled from "styled-components";

import logo from './logo.svg';

const App =() => (
  <Wrapper>
    <Header>
      <Logo src={logo} className="App-logo" alt="logo" />
      <p>
        Hello, React World !
      </p>
    </Header>
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default App;
