import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { v4 } from "uuid";

export const useItemStore = create(
  devtools(
    immer((set) => ({
      items: [],
      setItems: (items: any) => set(() => ({ items: [...items] })),
      addItem: (item: any) =>
        set((state: any) => {
          item.id = v4();
          state.items.push(item);
        }),
    }))
  )
);
