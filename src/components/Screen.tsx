import React from "react";
import styled from "styled-components";

interface IProps {
  socket: SocketIOClient.Socket;
}

interface IState {
  size: {
    width: number;
    height: number;
  };
}

export default class Screen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.socket = props.socket;
  }

  state = {
    size: {
      width: 0,
      height: 0
    }
  };

  private socket: SocketIOClient.Socket;

  getWindowSize() {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName("body")[0];
    const width = w.innerWidth || e.clientWidth || g.clientWidth;
    const height = w.innerHeight || e.clientHeight || g.clientHeight;

    const size = {
      width,
      height
    };

    this.setState(() => {
      return {
        size
      };
    });

    return size;
  }

  componentWillMount() {
    this.getWindowSize();
    window.addEventListener("resize", () => {
      this.getWindowSize();
    });
  }

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
        <p>{this.state.size.width}</p>
        <p>{this.state.size.height}</p>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: center;
  background-color: white;
`;
