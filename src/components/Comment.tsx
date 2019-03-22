import React from "react";
import styled from "styled-components";

interface IProps {
  socket: SocketIOClient.Socket;
}

interface IState {
  color: string;
  body: string;
}

export default class Comment extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.socket = props.socket;
  }

  state: IState = {
    color: "black",
    body: ""
  };

  private socket: SocketIOClient.Socket;

  handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      type: "comment",
      posted_at: new Date(),
      data: this.state
    };
    this.socket.emit("COMMENT", payload);

    this.setState(() => {
      return {
        body: ""
      };
    });
  };

  handleChangeColor = (e: any) => {
    const value = e.target.value;
    this.setState(() => {
      return {
        color: value
      };
    });
  };

  handleChangeBody = (e: any) => {
    const value = e.target.value;
    this.setState(() => {
      return {
        body: value
      };
    });
  };

  render() {
    return (
      <Wrapper>
        <CommentInput>
          <CommentInputField
            type="text"
            name="body"
            maxLength={60}
            placeholder="コメント"
            onChange={this.handleChangeBody}
            value={this.state.body}
          />
          <CommentSubmitButton type="submit" onClick={this.handleSubmit}>
            送信
          </CommentSubmitButton>
        </CommentInput>

        <ChoiceColor>
          <Li>
            <ColorRadio
              type="radio"
              name="color"
              value="black"
              id="radio01"
              onChange={this.handleChangeColor}
              defaultChecked
            />
            <ColorRadioLabel htmlFor="radio01">くろ</ColorRadioLabel>
          </Li>
          <Li>
            <ColorRadio
              type="radio"
              name="color"
              value="red"
              id="radio02"
              onChange={this.handleChangeColor}
            />
            <ColorRadioLabel htmlFor="radio02">あか</ColorRadioLabel>
          </Li>
          <Li>
            <ColorRadio
              type="radio"
              name="color"
              value="blue"
              id="radio03"
              onChange={this.handleChangeColor}
            />
            <ColorRadioLabel htmlFor="radio03">あお</ColorRadioLabel>
          </Li>
          <Li>
            <ColorRadio
              type="radio"
              name="color"
              value="yellow"
              id="radio04"
              onChange={this.handleChangeColor}
            />
            <ColorRadioLabel htmlFor="radio04">きいろ</ColorRadioLabel>
          </Li>
        </ChoiceColor>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CommentInput = styled.div`
  margin: 10px auto;
  text-align: center;
  width: 100%;
`;

const CommentInputField = styled.input`
  height: 20px;
  border: 1px solid #333;
  border-radius: 10px;
  box-shadow: none;
  text-indent: 1rem;

  &:focus {
    outline: none;
  }
`;

const CommentSubmitButton = styled.button`
  padding: 2px 8px;
  border: 1px solid #333;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: none;
`;

const ChoiceColor = styled.div``;

const Li = styled.li`
  list-style: none;
`;

const ColorRadioLabel = styled.label`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 8px;
  padding-left: 42px;
  padding-right: 12px;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1rem;

  &:before {
    position: absolute;
    top: 50%;
    left: 18px;
    margin-top: -5px;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #53b300;
    content: "";
    opacity: 0;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 15px;
    display: block;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
    border: 2px solid #bbb;
    border-radius: 50%;
    content: "";
  }
`;

const ColorRadio = styled.input`
  display: none;

  &:checked + ${ColorRadioLabel}:before {
    opacity: 1;
  }
`;
