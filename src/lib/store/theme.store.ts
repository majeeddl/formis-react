import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useThemeStore = create(
  subscribeWithSelector((set) => ({
    dir: "ltr",
    setDir: (dir: any) => set({ dir }),
    theme: "light",
    setTheme: (theme: string) => set({ theme }),
  }))
);
