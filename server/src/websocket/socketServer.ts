import { Server as HttpServer} from "http";
import { WebSocketServer } from "ws";
import { joinRoomHandler } from "./handlers/joinRoomHandler";
import { sendMessageHandler } from "./handlers/sendMessageHandler";

export const setUpWebSocketServer = (server: HttpServer) => {
    const wss = new WebSocketServer({server});

    wss.on("connection", (ws, req) => {
        console.log(
            "WebSocket client connected from",
            req.socket.remoteAddress
        );
        ws.send("Connection established");

        ws.on("message", (data) => {
            
            const parsedData = JSON.parse(data.toString());
            const roomId = parsedData.roomId;

            switch(parsedData.type){
                case "JOIN_ROOM":
                    joinRoomHandler(ws, roomId);
                    break;
                
                case "SEND_MESSAGE":
                    const message = parsedData.message
                    sendMessageHandler(roomId,message);
                    break;

                default:
                    break;
            }

        
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