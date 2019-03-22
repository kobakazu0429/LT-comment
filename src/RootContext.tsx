import { createGlobalState } from "react-context-global-state";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:5001");

socket.on("connect", () => {
  console.log(`connected: ${socket.connected}`);
});

const initialState = { socket };

export const {
  StateProvider: Provider,
  StateConsumer: Consumer
} = createGlobalState(initialState);
