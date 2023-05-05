
import React, { useState } from "react";

import FormItem, { FormItemProps } from "./FormItem";
// import { ItemDragTargetTypeEnums } from "../../lib/modeler/toolbox/controls/Item.control";
import Droppable from "./common/Droppable";

export enum FormModeEnums {
  view = "view",
  edit = "edit",
}

export type FormProps = {
  mode?: FormModeEnums;
  items?: FormItemProps[];
};

const Form = ({ mode = FormModeEnums.view, items = [] }: FormProps) => {
  
  return (
    <>
      
      <Droppable id="1"></Droppable>
      {items.map((item: any, index: number) => (
        <div className="mt-1" key={`${item.id}`}>
          <FormItem type={item.type} {...item} mode={mode}></FormItem>
        </div>
      ))}

      <div
        style={{
          padding: 40,
        }}
      >
        ------
      </div>
      <Droppable id="2"></Droppable>
      {/* <button onClick={() => console.log(items)}>button</button> */}
    </>
  );
};

export default Form;
