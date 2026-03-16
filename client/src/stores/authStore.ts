import { create } from 'zustand';
import type { User } from '../types/user';

type AuthStore = {
  user: User | null;
  setUser: (userData: User) => void;
  clearUser: () => void;
};


export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    setUser : (userData: User) => set({ user: userData}),
    clearUser: () => set({ user: null})

}))