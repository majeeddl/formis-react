import { ItemTypes } from "../../../views/dragAndDrop/ItemTypes";

import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

interface ItemsState {
  items: any[];
}

const initialState: ItemsState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state: ItemsState, payload: any) => {
      state.items = payload.items;
    },
    addItem: (state: ItemsState, action: any) => {
      console.log(action);
      const item = action.payload;
      item.id = v4();
      state.items.push(item);
    },
    updateItem: (state: ItemsState, payload: any) => {},
    removeItem: (state: ItemsState, payload: any) => {},
  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;
