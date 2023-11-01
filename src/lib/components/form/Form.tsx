import React, { useContext, useEffect, useState } from "react";

import FormItem, { TFormItemProps } from "./FormItem";
// import { ItemDragTargetTypeEnums } from "../../lib/modeler/toolbox/controls/Item.control";
import Droppable from "./common/Droppable";
import FormItemDraggable from "./common/Draggable.formItem";
import { useFormis } from "../../hooks/formis.hook";
import Draggable from "../../../views/dnd/Draggable";
import { FormisContext } from "../../Formis";

export enum FormModeEnums {
  view = "view",
  edit = "edit",
}

export type TFormProps = {
  // mode?: FormModeEnums;
  // items?: FormItemProps[];
  useFormis: ReturnType<typeof useFormis>;
};

const Form = ({ useFormis }: TFormProps) => {
  // const { items, mode } = useFormis;

  const items: any = useContext(FormisContext);

  const _items = items.filter((item: any) => item.parent == null);

  useEffect(() => {
    console.log("items : ", items);
  }, [items, _items]);

  return (
    <>
      <Droppable id=""></Droppable>
      {_items.map((item: any, index: number) => (
        <div className="mt-1" key={`${item.id}`}>
          <FormItemDraggable
            id={item.id}
            formItem={{
              ...item,
              useFormis,
            }}
          >
            <FormItem type={item.type} {...item} useFormis={useFormis} index={index}></FormItem>
          </FormItemDraggable>
          <Droppable id={item.id}>{/* {item.id} */}</Droppable>
        </div>
      ))}

      {/* <div
        style={{
          padding: 40,
        }}
      >
        ------
      </div> */}

      {/* <button onClick={() => console.log(items)}>button</button> */}
    </>
  );
};

export default Form;
