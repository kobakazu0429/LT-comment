import React from "react";
import styled from "styled-components";

// import delayCall from "../utils/timer";

const PINK = "#ed6d7c";

// interface IState {
//   fill: string;
// }

export default class HeartIcon extends React.Component {
  // state: IState = {
  //   fill: "none"
  // };

  // changeColor = () => {
  //   const nextColor = this.state.fill === "none" ? PINK : "none";
  //   this.setState({
  //     fill: nextColor
  //   });
  // };

  // handleClick = () => {
  //   this.changeColor();
  //   delayCall(1.5, this.changeColor);
  // };

  render() {
    return (
      <Heart
        width="20"
        height="18"
        viewBox="2 2 20 21"
        // onClick={this.handleClick}
        // style={{ fill: this.state.fill }}
      >
        <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z" />
      </Heart>
    );
  }
}

const Heart = styled.svg`
  width: 70%;
  height: auto;
  color: ${PINK};
  fill: none;
  stroke: ${PINK};
  stroke-width: 2px;
  transition: fill 1s linear;
`;
