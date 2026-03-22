import { WebSocket } from "ws";
import { MessageRepository } from "../../repositories/MessageRepository";
import { UserRepository } from "../../repositories/UserRepository";

export const joinRoomHandler = (ws: WebSocket,roomId: string) => {
    const messageRepo = new MessageRepository();
    const userRepo = new UserRepository();
    const messagesWithoutName = messageRepo.getMessages(roomId);
    const users = userRepo.getAllUsers();

    const messages = messagesWithoutName.map((msg) => {
        const user = users.find((u) => u.userId === msg.senderId);

        return {
            ...msg,
            senderName: user?.name || "Unknown"
        };
    });
    ws.send(JSON.stringify({
        type: "OLD_DATA",
        messages
    })) 

}