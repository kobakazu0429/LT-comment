import React from "react";
import styled from "styled-components";

import { Consumer } from "../RootContext";

import Header from "../components/Header";
import Comment from "../components/Comment";
import SendImage from "../components/SendImage";
import Infomation from "../components/Infomation";

const IndexPage = () => (
  <Consumer>
    {ws => (
      <Wrapper>
        <Header />
        <Comment ws={ws} />
        <SendImage />
        <Infomation ws={ws} />
      </Wrapper>
    )}
  </Consumer>
);

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 100%;
`;
export default IndexPage;
