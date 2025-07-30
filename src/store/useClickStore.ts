import { create } from 'zustand';

interface ClickState {
  clickCount: number;
  increment: () => void;
}

export const useClickStore = create<ClickState>((set) => ({
  clickCount: 0,
  increment: () => set((state) => ({ clickCount: state.clickCount + 1 })),
}));
