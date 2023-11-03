import { FormisItemsContextProvider } from "./formis.items.context";

export const FormisContextProvider = ({ children, useFormis }: any) => {
  return <FormisItemsContextProvider useFormis={useFormis}>{children}</FormisItemsContextProvider>;
};
