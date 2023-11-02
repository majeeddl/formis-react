import React, { useContext, useEffect, useState } from "react";

import FormItem, { TFormItemProps } from "./FormItem";
// import { ItemDragTargetTypeEnums } from "../../lib/modeler/toolbox/controls/Item.control";
import Droppable from "./common/Droppable";
import FormItemDraggable from "./common/Draggable.formItem";
import { useFormis } from "../../hooks/formis.hook";
import Draggable from "../../../views/dnd/Draggable";
import { useFormisItems } from "../../context/formis.items.context";
import { useForm } from "@mantine/form";

export enum FormModeEnums {
  view = "view",
  edit = "edit",
}

export type TFormProps = {
  // mode?: FormModeEnums;
  // items?: FormItemProps[];
  // useFormis: ReturnType<typeof useFormis>;
};

const Form = ({}: TFormProps) => {
  // const { items, mode } = useFormis;

  const items: any = useFormisItems();

  const _items = items.filter((item: any) => item.parent == null);

  // useEffect(() => {
  //   console.log("items : ", items);
  // }, [items, _items]);

  const form = useForm({
    initialValues: {
      name: "test",
    },
    validate: {},
    initialErrors: {
      name: "error",
    },
  });

  return (
    <>
      <Droppable id=""></Droppable>
      {_items.map((item: any, index: number) => (
        <div className="mt-1" key={`${item.id}`}>
          <FormItemDraggable
            id={item.id}
            formItem={{
              ...item,
              // useFormis,
            }}
          >
            <FormItem type={item.type} {...item} index={index} form={form}></FormItem>
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
