import {
  createContext,
  FunctionComponent,
  ReactElement,
  useState,
} from "react";

export const FormisContext = createContext({
  items: [],
  setItems: (items: any) => {},
});

type FormisProviderProps = {
  items?: any;
  children: ReactElement;
};

export const FormisProvider: FunctionComponent<FormisProviderProps> = ({
  items = [],
  children,
}) => {
  const [_items, _setItems] = useState<any>(items);

  const setItems = (items: any) => {
    _setItems((prev: any) => [...items]);
  };

  return (
    <FormisContext.Provider value={{ items: _items, setItems }}>
      {children}
    </FormisContext.Provider>
  );
};
