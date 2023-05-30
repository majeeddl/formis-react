import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { FormItemProps, FormItemTypeEnum } from "../components/form/FormItem";
import { v4 } from "uuid";
import { stat } from "fs";

interface IFormStore {
  items: FormItemProps[] | any;
  getItem: (id: string) => any;
  setItems: (items: any) => void;
  addItem: (item: any, index?: number) => void;
  editItem: (item: any) => void;
  deleteItem: (id: string) => void;
  clear: () => void;
  setSelected: (id: string) => void;
}

export const useFormStore = create<IFormStore>()(
  subscribeWithSelector((set: any, get: any) => ({
    items: [
      {
        id: v4(),
        type: "input",
        label: "Name 1",
        pareny: null,
        x: 0,
        y: 1,
      },
      {
        id: v4(),
        type: "input",
        label: "Name 2",
        parent: null,
        x: 0,
        y: 0,
      },
      // {
      //   name: "name",
      //   label: "Name",
      //   type: FormItemTypeEnum.Input,
      //   parent : null,
      //   x : 0,
      //   y : 1,
      // },
      // {
      //   name: "dgendor",
      //   label: "asdasd",
      //   type: FormItemTypeEnum.Radio,
      //   x : 0,
      //   y : 0,
      //   parent : null,
      //   values : [
      //     {
      //       value : "asdsad",
      //       label : "asdsad",
      //     },{
      //       value : "asdsad",
      //       label : "asdsad",
      //     }
      //   ]
      // },
    ],
    getItem: (id: string) => get().items.find((i: any) => i.id === id),
    setItems: (items: any) => set({ items }),
    addItem: (item: any, index?: number) =>
      set((state: any) => {
        const findParent =
          state.items.find((i: any) => i.id === item.parent) || null;
        const newItem = { ...item, id: v4(), parent: findParent?.id || null };

        const y = newItem.y || 0;

        state.items.map((item: any) => {
          return item.y >= y ? (item.y += 1) : item;
        });
        state.items.push(newItem);
        // state.items.splice(index, 0, newItem);
        return state;
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
        return {
          items: state.items,
        }
      }),
    clear: () => set({ items: [] }),
    setSelected: (id: string) =>
      set((state: any) => {
        const index = state.items.findIndex((i: any) => i.id === id);
        const item = state.items[index];
        state.items.forEach((i: any) => (i.selected = false));
        state.items[index] = {
          ...item,
          selected: true,
        };
        return {
          items: state.items,
        };
      }),
  }))
);
