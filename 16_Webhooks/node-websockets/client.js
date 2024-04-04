import { WebSocket } from "ws";

const ws = new WebSocket("ws://ad73c907fa97796aef3d8a8b38d0aaa4.serveo.net/");

ws.on("open", () => {
  console.log("Connected to server");
  ws.send("Hello from Node.js client");

  ws.on("message", (message) => {
    console.log("Received message:", message.toString());
  });
});