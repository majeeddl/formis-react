import { useForm } from "@mantine/form";
import { Dispatch, createContext, useContext, useEffect, useReducer } from "react";
import { v4 } from "uuid";

type TFormisItemsAction =
  | {
      type: "add";
      payload: {
        item: any;
        _id: string;
      };
    }
  | {
      type: "update";
      payload: any;
    }
  | {
      type: "delete";
      payload: {
        id: string;
      };
    }
  | {
      type: "replace";
      payload: {
        id: string;
        next: number;
      };
    }
  | {
      type: "select";
      payload: {
        id: string;
      };
    };
const FormisContext = createContext<any>({
  items: [],
});
const FormisDispatchContext = createContext<{
  dispatchItems: Dispatch<TFormisItemsAction>;
}>({} as any);

const createUUID = () => v4();

const formisItemsReducer = (state: any, action: TFormisItemsAction) => {
  const items = [...state];

  switch (action.type) {
    case "add": {
      let { item, _id } = action.payload;

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

      //  setItems((prev) => {
      items.forEach((i: any) => (i.selected = false));
      items.splice(index + 1, 0, item, ...extraItems);

      console.log("items : ", items);
      return [...items];
      //  });
    }
    case "update": {
      const { id, ...rest } = action.payload;
      const index = items.findIndex((i: any) => i.id === id);

      items[index] = {
        ...items[index],
        ...rest,
      };

      console.log("items : ", items);
      return items;
    }
    case "delete": {
      const { id } = action.payload;
      const _items = items.filter((i: any) => {
        return i.id !== id && !i.ancestors?.includes(id);
      });
      return _items;
    }
    case "replace": {
      const { id, next } = action.payload;
      const prevIndex = items.findIndex((i: any) => i.id === id);
      let nextIndex = items.findIndex((i: any) => i.id === next);

      nextIndex = nextIndex == -1 ? 0 : nextIndex > prevIndex ? nextIndex : nextIndex + 1;
      //   console.log("🚀 ~ file: formis.items.context.tsx:119 ~ formisItemsReducer ~ nextIndex:", nextIndex);
      items.splice(nextIndex, 0, items.splice(prevIndex, 1)[0]);
      return items;
    }
    case "select": {
      const { id } = action.payload;
      if (!id) return;
      const index = items.findIndex((i: any) => i.id === id);
      const item = items[index];
      items.forEach((i: any) => (i.selected = false));
      items[index] = {
        ...item,
        selected: true,
      };

      return items;
    }
    default:
      return state;
  }
};

export const FormisContextProvider = ({ children, useFormis }: any) => {
  const [items, dispatch] = useReducer(formisItemsReducer, useFormis?.items);

  const selectedItem = items.find((i: any) => i.selected);

  useFormis.getItems = () => items;

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      name: "",
    },
    // validate: (values)=>{
    //   return validate;
    // },
    // initialErrors: {
    //   name: "",
    // },
  });

  // useEffect(() => {

  // }, [items]);

  return (
    <FormisContext.Provider
      value={{
        items: items,
        selectedItem: selectedItem,
        form: form,
      }}
    >
      <FormisDispatchContext.Provider
        value={{
          dispatchItems: dispatch,
        }}
      >
        {children}
      </FormisDispatchContext.Provider>
    </FormisContext.Provider>
  );
};

export const useFormisContext = () => {
  return useContext(FormisContext);
};

export const useFormisDispatchContext = () => {
  return useContext(FormisDispatchContext);
};
