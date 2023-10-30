import { replace, set } from "cypress/types/lodash";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

type TMode = "edit" | "view";

type TUseFormisProps = {
  mode?: TMode;
  items?: any[];
};

export const useFormis = (props?: TUseFormisProps) => {
  const [mode, setMode] = useState<TMode>(props?.mode || "view");
  const [items, setItems] = useState<any[]>(props?.items || []);
  //   const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const createUUID = () => v4().replace(/-/g, "_");

  const addItem = (item: any, index: number) => {
    item.id = v4();
    item.selected = true;
    setItems((prev) => {
      prev.forEach((i: any) => (i.selected = false));
      prev.splice(index + 1, 0, item);
      return [...prev];
    });
    console.log(items);
    // setSelectedItem(item.id);
  };

  const deleteItem = (id: string | undefined) => {
    if (!id) return;
    const index = items.findIndex((i: any) => i.id === id);
    items.splice(index, 1);
    setItems(items);
  };

  const updateItem = (index: number, item: any) => {
    setItems(items.map((it, i) => (i === index ? item : it)));
  };

  const replaceItem = (id: string, nextIndex: number) => {
    const prevIndex = items.findIndex((i: any) => i.id === id);
    items.splice(nextIndex + 1, 0, items.splice(prevIndex, 1)[0]);
    setItems(items);
  };

  const selectItem = (id: string | undefined) => {
    if (!id) return;
    const index = items.findIndex((i: any) => i.id === id);
    const item = items[index];
    items.forEach((i: any) => (i.selected = false));
    items[index] = {
      ...item,
      selected: true,
    };

    setSelectedItem(items[index]);

    setItems((prev) => [...items]);
  };

  useEffect(() => {}, []);

  return {
    mode,
    setMode,
    items,
    setItems,
    addItem,
    deleteItem,
    updateItem,
    replaceItem,
    selectedItem,
    selectItem,
  };
};
