import http from "http";
import app from "./app";
import { setUpWebSocketServer } from "./websocket/socketServer";

const server = http.createServer(app);

setUpWebSocketServer(server);

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

server.listen(PORT, () => {
  console.log(`HTTP + WebSocket server running on port ${PORT}`);
});
