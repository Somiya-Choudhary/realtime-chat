import { create } from "zustand";
import type { Room } from "../types/room";

type RoomStore = {
  rooms: Room[];
  activeRoomId: string | null;
  setRooms: (rooms: Room[]) => void;
  addRoom: (room: Room) => void;
  setActiveRoomId: (roomId: string) => void;
  clearRooms: () => void;
};

export const useRoomStore = create<RoomStore>((set) => ({
  rooms: [],
  activeRoomId: null,

  setRooms: (roomsData) => set({ rooms: roomsData }),

  addRoom: (roomData) =>
    set((state) => ({
      rooms: [...state.rooms, roomData],
    })),

  setActiveRoomId: (roomId) => set({ activeRoomId: roomId }),

  clearRooms: () =>
    set({
      rooms: [],
      activeRoomId: null,
    }),
}));