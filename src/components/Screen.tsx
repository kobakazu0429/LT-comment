import React from "react";
import styled from "styled-components";

interface IProps {
  socket: SocketIOClient.Socket;
}

interface IComment {
  data: {
    body: string;
    color: "black" | "red" | "blue" | "yellow";
  };
}

interface IState {
  size: {
    width: number;
    height: number;
  };
  comment: IComment[];
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
    },
    comment: []
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

  handleComment(e: IComment) {
    console.log(e);
    const newArray = this.state.comment.concat("e");

    this.setState(() => {
      return {
        comment: newArray
      };
    });
  }

  render() {
    return (
      <Wrapper>
        <h1 style={{ fontSize: `${0.03 * this.state.size.width}px` }}>
          Screen
        </h1>
        <ul>
          <li>{this.state.size.width}</li>
          <li>{this.state.size.height}</li>
        </ul>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: center;
  background-color: white;
`;
