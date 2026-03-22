import { useChatStore } from "../stores/chatStore";
import type { Chat } from "../types/chat";



function Chat () {
    const chat = useChatStore((state) => state.chat);

    return (
        <>
        {
            chat?.map((message: Chat) => 
                <div><p>{message.senderName}:{message.content}</p>
                <p>{message.timestamp}</p>
                -------------------------
                </div>
            )
        }
            <div>
                <textarea /><br />
                <button>Submit</button>
            </div>
        </>
    )
}

export default Chat;