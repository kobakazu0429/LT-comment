import React from "react";
import styled from "styled-components";

interface IProps {
  socket: SocketIOClient.Socket;
}

interface IState {
  name: string;
  title: string;
}

export default class Infomation extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.socket = props.socket;
  }

  state: IState = {
    name: "",
    title: ""
  };

  private socket: SocketIOClient.Socket;

  componentDidMount() {
    this.socket.on("LISTENER", this.handleInfo.bind(this));
  }

  handleInfo(response: any) {
    if (response.type !== "speakerInfo") return;

    const name = response.data.name;
    const title = response.data.title;

    this.setState(() => {
      return {
        name,
        title
      };
    });
  }

  render() {
    return (
      <Wrapper>
        <Profile>
          <BoxTitle>現在</BoxTitle>
          <P>名前</P>
          <Name id="name">{this.state.name}</Name>
          <P>タイトル</P>
          <Title id="title">{this.state.title}</Title>
        </Profile>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Profile = styled.div`
  position: relative;
  margin: 5px 0;
  padding: 0.5em 1em;
  border: solid 2px #808080;
  border-radius: 6px;
  word-break: break-all;
`;

const BoxTitle = styled.span`
  position: absolute;
  top: -13px;
  left: 10px;
  display: inline-block;
  padding: 0 9px;
  background: #fff;
  font-weight: bold;
  font-size: 19px;
  line-height: 1;
`;

const P = styled.p`
  margin: 5px;
`;

const Name = styled.p`
  text-indent: 1rem;
  margin: 5px;
`;

const Title = styled.p`
  text-indent: 1rem;
  margin: 5px;
`;
