import React from "react";

import { Consumer } from "../RootContext";

import Screen from "../components/Screen";

const ScreenPage = () => (
  <Consumer name="socket">{value => <Screen socket={value} />}</Consumer>
);

export default ScreenPage;
