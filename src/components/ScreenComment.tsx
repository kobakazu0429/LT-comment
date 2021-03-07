import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
}

const ScreenComment = (props: IProps) => <Comment>{props.text}</Comment>;

const Comment = styled.span``;

export default ScreenComment;
