import { Server as HttpServer} from "http";
import { WebSocketServer } from "ws";

export const setUpWebSocketServer = (server: HttpServer) => {
    const wss = new WebSocketServer({server});

    wss.on("connection", (ws, req) => {
        console.log(
            "WebSocket client connected from",
            req.socket.remoteAddress
        );
        ws.send("Connection established");

        ws.on("message", (data) => {
        console.log("Received:", data.toString());

        ws.send(`Echo: ${data.toString()}`);
        });

        ws.on("close", () => {
        console.log("WebSocket client disconnected");
        });

        ws.on("error", (err) => {
        console.log("WebSocket error:", err);
        });

    });

    return wss;
}