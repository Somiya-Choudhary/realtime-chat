import { seedData } from "../seedData/seedData";
import { Message } from "../domains/Message";

export class MessageRepository {
    
    getMessages(roomId: string){
        const allMessages = seedData.messages;
        const curRoomMessages = allMessages.filter((message: Message) => message.roomId === roomId)
        return curRoomMessages;
    }

    addMessage(roomId: string,message: Message){
        seedData.messages.push(message);
    }
}

