import { create } from "zustand";
import type { Chat } from "../types/chat";

type chatStore = {
    chat: Chat[] | null;
    addChat: (chatData: Chat[]) => void;
    clearChat: () => void;

}


export const useChatStore = create<chatStore>((set) => ({
    chat: [],
    addChat:(chatData) => set({chat: chatData}),
    clearChat: () => set({chat: []}),
}))