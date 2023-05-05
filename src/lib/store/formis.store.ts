import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const formStore = create(
  subscribeWithSelector((set: any, get: any) => ({
    items: [],
    setItems : (items: any) => set({ items }),
  }))
);
