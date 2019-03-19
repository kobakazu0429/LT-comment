import React from "react";
import styled from "styled-components";

import HeartIcon from "./HeartIcon";
import ChkLogo from "../assets/chk.jpg";

const SendImage = () => (
  <Wrapper>
    <form>
      <WrapperBetween>
        <ButtonWrapper>
          <HeartIcon />
          <P>Likes</P>
        </ButtonWrapper>
        <ButtonWrapper>
          <Chk src={ChkLogo} alt="" />
          <P>ちょっくれ</P>
        </ButtonWrapper>
      </WrapperBetween>
    </form>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin: 0 20px;
  padding: 0 20px;
  max-width: 120px;
  width: 20vw;
  height: 100%;
  text-align: center;
  cursor: pointer;
`;

const Chk = styled.img`
  width: 70%;
  height: auto;
`;

const P = styled.p`
  font-size: 0.9rem;
  line-height: 0.9rem;
`;

export default SendImage;
