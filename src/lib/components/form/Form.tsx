import React, { useState } from "react";

import FormItem, { FormItemProps } from "./FormItem";
// import { ItemDragTargetTypeEnums } from "../../lib/modeler/toolbox/controls/Item.control";
import Droppable from "./common/Droppable";
import FormItemDraggable from "./common/Draggable.formItem";
import { useFormis } from "../../hooks/formis.hook";
import Draggable from "../../../views/dnd/Draggable";

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
  const { items, mode } = useFormis;

  return (
    <>
      <Droppable id="-1"></Droppable>
      <Draggable id="salam">drag me</Draggable>
      {items.map((item: any, index: number) => (
        <div className="mt-1" key={`${item.id}`}>
          <FormItemDraggable id={item.id} formItem={{
            ...item,
            useFormis
          }}>
            <FormItem type={item.type} {...item} useFormis={useFormis} index={index}></FormItem>
          </FormItemDraggable>
          <Droppable id={index}></Droppable>
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
