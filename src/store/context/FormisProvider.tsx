import {
  createContext,
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";

export const FormisContext = createContext({
  items: [],
  setItems: (items: any) => {},
  getItems: () => {},
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
    console.log("SET ITEMS IN PROVIDER :");
    console.log(items);
    _setItems((prev:any)=> [...items]);

   
  };

  const getItems = ()=> items

  useEffect(()=>{
    console.log("_items")
    console.log(_items)
  },[_items])

  return (
    <FormisContext.Provider value={{ items: _items, setItems,getItems }}>
      {children}
    </FormisContext.Provider>
  );
};
