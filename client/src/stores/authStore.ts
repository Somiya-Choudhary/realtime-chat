import { create } from 'zustand';
import type { User } from '../types/user';


export const useAuthStore = create((set) => ({
    user: null,
    setUser : (userData: User) => set({ user: userData}),
    clearUser: () => set({ user: null})

}))