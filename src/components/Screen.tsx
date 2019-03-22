import React from "react";
import styled from "styled-components";

interface IProps {
  socket: SocketIOClient.Socket;
}

interface IState {
  name: string;
  title: string;
}

export default class Screen extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.socket = props.socket;
  }

  state: IState = {
    name: "",
    title: ""
  };

  private socket: SocketIOClient.Socket;

  componentDidMount() {
    this.socket.on("SCREEN", this.handleComment.bind(this));
  }

  handleComment(e: any) {
    console.log(e);
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
