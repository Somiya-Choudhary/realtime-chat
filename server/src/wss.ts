import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080});

wss.on('listening',() => {
    console.log('Websocket server started on port 8080');
});

wss.on('error',(err) => console.log(err));

wss.on("connection", (ws, req) => {
  console.log("ws client connected from", req.socket.remoteAddress);
  console.log("Total connected:", wss.clients.size);

  ws.send("Connection established");

  ws.on("message", (data) => {
    console.log("received:", data.toString());
    ws.send(`echo: ${data.toString()}`);
  });

  ws.send('Hello from server');

  ws.on("close", () => console.log("ws client disconnected"));
  ws.on("error", (err) => console.log("ws socket error:", err));
});

export default wss;
