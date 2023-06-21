import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { zustandStorage } from './zustandStorage';

interface UIState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (darkMode: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist<UIState>(
    set => ({
      darkMode: false,
      toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
      setDarkMode: darkMode => set({ darkMode }),
    }),
    {
      name: 'dark-mode',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
