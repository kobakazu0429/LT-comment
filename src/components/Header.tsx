import React from "react";
import styled from "styled-components";

const Header = () => (
  <Wrapper>
    <EventName>
      <Chk>ちょっくれ</Chk>
      <LT>LTalks: Tech</LT>
    </EventName>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const EventName = styled.div`
  position: relative;
  display: inline-block;
  margin-top: -5px;
  padding: 0 45px;
  text-align: center;

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 50px;
    height: 2px;
    background-color: #333;
    content: "";
  }

  &:before {
    left: -15px;
    -webkit-transform: rotate(65deg);
    -moz-transform: rotate(65deg);
    -ms-transform: rotate(65deg);
    transform: rotate(65deg);
  }

  &:after {
    right: -15px;
    -webkit-transform: rotate(-65deg);
    -moz-transform: rotate(-65deg);
    -ms-transform: rotate(-65deg);
    transform: rotate(-65deg);
  }
`;

const Chk = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const LT = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

export default Header;
