import React from "react";
import styled from "styled-components";

interface IProps {
  ws: any;
}

interface IState {
  name: string;
  title: string;
}

export default class Admin extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.ws = props.ws.ws;
  }

  state: IState = {
    name: "",
    title: ""
  };

  private ws: WebSocket;

  handleChangeName = (e: any) => {
    const value = e.target.value;
    this.setState(() => {
      return {
        name: value
      };
    });
  };

  handleChangeTitle = (e: any) => {
    const value = e.target.value;
    this.setState(() => {
      return {
        title: value
      };
    });
  };

  handleSubmit(e: any) {
    e.preventDefault();
    const payload = {
      type: "speakerInfo",
      data: this.state
    };
    this.ws.send(JSON.stringify(payload));
  }

  render() {
    return (
      <Wrapper>
        <Title>Admin Page</Title>
        <Form>
          <FormGroup>
            <Input
              type="text"
              id="input-name"
              placeholder="名前"
              onChange={this.handleChangeName}
              maxLength={60}
            />
            <Label htmlFor="input-name">名前</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              id="input-title"
              placeholder="タイトル"
              onChange={this.handleChangeTitle}
              maxLength={60}
            />
            <Label htmlFor="input-title">タイトル</Label>
          </FormGroup>
          <Submit onClick={this.handleSubmit.bind(this)}>送信</Submit>
        </Form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 8px;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 1.5rem 2rem;
  background-color: white;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-lighter);
  font-size: var(--font-size-3);
  text-align: center;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  position: relative;
  padding-top: 1.5rem;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: var(--font-size-small);
  opacity: 1;
  transform: translateY(0);
  transition: all 0.2s ease-out;
`;

const Input = styled.input`
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.75rem;
  box-shadow: none;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 1px solid hsl(220, 10%, 90%);
  border-radius: 0.2rem;
  color: hsl(220, 10%, 10%);
  -webkit-transition: border-color 0.1s ease-out, color 0.1s ease-out,
    background-color 0.1s ease-out;
  transition: border-color 0.1s ease-out, color 0.1s ease-out,
    background-color 0.1s ease-out;
  display: block;
  width: 100%;
  height: 2.5rem;
  padding: 0 0.75rem;

  :placeholder-shown + label {
    opacity: 0;
    transform: translateY(1rem);
  }
`;

const Submit = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  display: inline-block;
  position: relative;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #000;
  transition: 0.4s;
  margin-top: 20px;

  :hover {
    color: #ff7f7f;
  }
  :before,
  :after {
    position: absolute;
    top: 0;
    content: "";
    width: 8px;
    height: 100%;
    display: inline-block;
  }
  :before {
    border-left: solid 1px #ff7f7f;
    border-top: solid 1px #ff7f7f;
    border-bottom: solid 1px #ff7f7f;
    left: 0;
  }
  :after {
    content: "";
    border-top: solid 1px #ff7f7f;
    border-right: solid 1px #ff7f7f;
    border-bottom: solid 1px #ff7f7f;
    right: 0;
  }
`;
