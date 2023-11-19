import React, { useContext, useEffect, useState } from "react";

import FormItem, { TFormItemProps } from "./FormItem";
// import { ItemDragTargetTypeEnums } from "../../lib/modeler/toolbox/controls/Item.control";
import Droppable from "./common/Droppable";
import FormItemDraggable from "./common/Draggable.formItem";
import { useFormis } from "../../hooks/formis.hook";
import Draggable from "../../../views/dnd/Draggable";
import { useFormisItems, useFormisItemsDispatch } from "../../context/formis.items.context";
import { hasLength, useForm } from "@mantine/form";
import math from "../../lib/math.lib";

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
  const dispatch = useFormisItemsDispatch();

  const _items = items.filter((item: any) => item.parent == null);

  // useEffect(() => {
  //   console.log("items : ", items);
  // }, [items, _items]);

  const [validate, setValidate] = useState<any>({
    name: hasLength({ min: 3, max: 20 }, "Name must be between 3 and 20 characters"),
  });

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      name: "",
    },
    // validate: (values)=>{
    //   return validate;
    // },
    // initialErrors: {
    //   name: "",
    // },
  });

  useEffect(() => {
    // console.log("form values changes");
    // console.log(form.values);
    // form.validate();
    //
  }, [form.values]);

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

      <button
        onClick={(e) => {
          e.preventDefault();
          form.setFieldError("name", "salam");
          console.log(form.errors);
          // dispatch({
          //   type: "update",
          //   payload: {
          //     id: "1",
          //     label: "majeed",
          //     validate: `isEmail(value,'Invalid email')`,
          //   },
          // });
        }}
      >
        button
      </button>
    </>
  );
};

export default Form;
