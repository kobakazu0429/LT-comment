import React from "react";

import { Consumer } from "../RootContext";

import Admin from "../components/Admin";

const AdminPage = () => <Consumer>{ws => <Admin ws={ws} />}</Consumer>;

export default AdminPage;
