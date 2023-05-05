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
      editItem: (item: any) =>
        set((state: any) => {
          const index = state.items.findIndex((i: any) => i.id === item.id);
          state.items[index] = item;
        }),
      deleteItem: (id: string) =>
        set((state: any) => {
          const index = state.items.findIndex((i: any) => i.id === id);
          state.items.splice(index, 1);
        }),
    }))
  )
);
