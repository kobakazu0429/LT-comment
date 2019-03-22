import React from "react";

import { Consumer } from "../RootContext";

import Admin from "../components/Admin";

const AdminPage = () => (
  <Consumer name="socket">{value => <Admin socket={value} />}</Consumer>
);

export default AdminPage;
