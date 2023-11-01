import { replace, set } from "cypress/types/lodash";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { TFormItemProps, TFormItemType } from "../components/form/FormItem";

type TMode = "edit" | "view";

type TUseFormisProps = {
  mode?: TMode;
  items?: Omit<TFormItemProps, "useFormis">[];
};

export const useFormis = (props?: TUseFormisProps) => {
  const [mode, setMode] = useState<TMode>(props?.mode || "edit");
  const [items, setItems] = useState(props?.items || []);
  //   const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const createUUID = () => v4();

  const addItem = (item: TFormItemProps, _id: string) => {
    item.id = v4();
    item.selected = true;

    let extraItems: any = [];

    if (item.type == "grid") {
      extraItems = [
        {
          id: `${createUUID()}`,
          type: "col",
          span: 12,
          parent: item.id,
          ancestors: [...(items[items.length - 1]?.ancestors || []), item.id],
        },
        {
          id: `${createUUID()}`,
          type: "col",
          span: 12,
          parent: item.id,
          ancestors: [...(items[items.length - 1]?.ancestors || []), item.id],
        },
      ];
    }

    let parent = null;

    if (_id.includes("_")) {
      const _idArr = _id.split("_");
      const _idArrLength = _idArr.length;
      // item.parent = _idArr.splice(0, _idArrLength - 1).join("_");
      _id = _idArr[0];
      parent = _idArr[1];
    }

    const findIndex = items.findIndex((i: any) => i.id === _id);
    console.log("findIndex");
    console.log(_id);
    console.log(findIndex);
    const index = findIndex;

    item.parent = parent;
    item.ancestors = [];
    if (item.parent) item.ancestors = [...(items[index]?.ancestors || []), item.parent];

    setItems((prev) => {
      prev.forEach((i: any) => (i.selected = false));
      prev.splice(index + 1, 0, item, ...extraItems);
      return [...prev];
    });
    // console.log(items);
    // setSelectedItem(item.id);
  };

  const deleteItem = (id: string | undefined) => {
    if (!id) return;
    // const index = items.findIndex((i: any) => i.id === id);
    // const findItem = items.find((i: any) => i.id === id);
    const _items = items.filter((i: any) => {
      return i.id !== id && !i.ancestors?.includes(id);
    });
    setItems(_items);
  };

  const updateItem = (index: number, item: any) => {
    setItems(items.map((it, i) => (i === index ? item : it)));
  };

  const replaceItem = (id: string, nextIndex: number) => {
    console.log("replaceItem");
    console.log(id);
    console.log(nextIndex);
    const prevIndex = items.findIndex((i: any) => i.id === id);
    console.log(prevIndex);
    items.splice(nextIndex | 0, 0, items.splice(prevIndex, 1)[0]);
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

    // setItems((prev) => [...items]);
  };

  // useEffect(() => {}, []);

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
