import React, { useState } from "react";
import DropArea from "./DropArea";
import FormItem from "./FormItem";

const Form = ({ items }: any) => {
  // const [items, setItems] = useState([]);

  // const _items = useAppSelector((state) => state.items.items);

  const dropItem = (item: any) => {
    console.log("drop item in right panel");
  };

  return (
    <>
      <DropArea
        accept="box"
        onDrop={dropItem}
        parent={null}
        index={0}
        data-cy="drag-area"
      ></DropArea>

      {items.map((item: any, index: number) => (
        <div className="mt-1" key={`${item.id}`}>
          <FormItem type={item.type} {...item}></FormItem>
        </div>
      ))}

      {/* <button onClick={() => console.log(items)}>button</button> */}
    </>
  );
};

export default Form;
