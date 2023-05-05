import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { FormItemProps, FormItemTypeEnum } from "../components/form/FormItem";
import { v4 } from "uuid";

interface IFormStore {
  items: FormItemProps[] | any;
  setItems: (items: any) => void;
  addItem: (item: any, index: number) => void;
  editItem: (item: any) => void;
  deleteItem: (id: string) => void;
}

export const useFormStore = create<IFormStore>()(
  subscribeWithSelector((set: any) => ({
    items: [
      {
        name: "name",
        label: "Name",
        type: FormItemTypeEnum.Input,
      },
      {
        name: "dgendor",
        label: "asdasd",
        type: FormItemTypeEnum.Radio,
        data : [
          {
            value : "asdsad",
            label : "asdsad",
          },{
            value : "asdsad",
            label : "asdsad",
          }
        ]
      },
    ],
    setItems: (items: any) => set({ items }),
    addItem: (item: any, index: number) =>
      set((state: any) => {
        const newItem = { ...item, id: v4() };
        state.items.splice(index, 0, newItem);
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
      }),
  }))
);
