export class Message {
    id: string;
    roomId: string;
    senderId: string;
    content: string;
    timestamp: Date;

    constructor(id: string, roomId: string, senderId: string, content: string, timestamp: Date) {
        this.id = id;
        this.roomId = roomId;
        this.senderId = senderId;
        this.content = content;
        this.timestamp = timestamp;
    }
}