import { immer } from "zustand/middleware/immer";

import create from "zustand";
import { devtools } from "zustand/middleware";

export const useThemeStore = create(
  devtools(
    immer((set) => ({
      dir: "ltr",
      setDir: (dir: string) =>
        set((state: any) => {
          dir: dir;
        }),
    }))
  )
);
