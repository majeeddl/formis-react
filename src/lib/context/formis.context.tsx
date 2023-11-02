import { FormisItemsContextProvider } from "./formis.items.context";

export const FormisContextProvider = ({ children, useFormis }: any) => {
  // const [items, dispatch] = useReducer(formisItemsReducer, useFormis?.items);

  return <FormisItemsContextProvider useFormis={useFormis}>{children}</FormisItemsContextProvider>;
};
