import { create } from 'zustand';

interface userDetail {
    userId: string | undefined;
    email: string | undefined;
}

interface IUserStoreState {
    user: userDetail | undefined;
    setUser: (user: userDetail) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useUserStore = create<IUserStoreState>()((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    user: { userId: undefined, email: undefined },
    setUser: (user: userDetail) => set({ user }),
}));
