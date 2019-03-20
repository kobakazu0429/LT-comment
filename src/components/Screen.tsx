import React from "react";
import styled from "styled-components";

export default class Screen extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <h1>Screen</h1>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: center;
  background-color: white;
`;
