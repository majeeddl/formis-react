import { FormItemProps } from "antd";
import React, { useState } from "react";


import FormItem from "./FormItem";
import { ItemDragTargetTypeEnums } from "../../lib/modeler/toolbox/controls/Item.control";

export enum FormModeEnums {
  view = "view",
  edit = "edit",
}

export type FormProps = {
  mode?: FormModeEnums;
  items?: FormItemProps[];
};

const Form = ({ mode = FormModeEnums.view, items = [] }: FormProps) => {
  // const [items, setItems] = useState([]);

  // const _items = useAppSelector((state) => state.items.items);

  // const dropItem = (item: any) => {
  //   console.log("drop item in right panel");
  // };

  return (
    <>
      {/* {mode == FormModeEnums.edit && (
        <DropArea
          accept={ItemDragTargetTypeEnums.Wrapper}
          onDrop={dropItem}
          parent={null}
          index={0}
          data-cy="drag-area"
        ></DropArea>
      )} */}
      {items.map((item: any, index: number) => (
        <div className="mt-1" key={`${item.id}`}>
          <FormItem type={item.type} {...item} mode={mode}></FormItem>
        </div>
      ))}

      {/* <button onClick={() => console.log(items)}>button</button> */}
    </>
  );
};

export default Form;
