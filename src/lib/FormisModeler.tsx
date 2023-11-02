import { Card, Code, Grid, Loader, LoadingOverlay, TextInput } from "@mantine/core";
import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { useItemStore } from "./store/item.store";

import { DndContext, DragOverlay, useDndMonitor } from "@dnd-kit/core";

import FormPanel from "./modeler/Form.panel";
import ToolboxPanel from "./modeler/Toolbox.panel";
import Draggable from "../views/dnd/Draggable";
import Droppable from "../views/dnd/Droppable";
import ControlItem from "./modeler/toolbox/controls/Item.control";
import FormItem from "./components/form/FormItem";
import { useFormStore } from "./store/form.store";
import { useFormis } from "./hooks/formis.hook";
import { useForm } from "@mantine/form";
import { useFormisItems, useFormisItemsDispatch } from "./context/formis.items.context";

type FormisModelerProps = {
  items?: any;
  onChange?: (items: any) => {};
  onSave?: (items: any) => {};
  // useFormis: ReturnType<typeof useFormis>;
};

const FormModeler = ({}: FormisModelerProps) => {
  const items = useFormisItems();
  const dispatch = useFormisItemsDispatch();
  // const { addItem, replaceItem } = useFormis;


  const [isDragging, setIsDragging] = useState(false);
  const [draggingItem, setDraggingItem] = useState<any>(null);
  // useEffect(() => {
  //   console.log("items : ", items);
  //   onChange(items);
  // }, [items]);

  // useDndMonitor({
  //   onDragStart(event) {
  //     console.info("onDragStart : ", event);
  //   },
  // });
  useEffect(() => {
    console.warn("useFormis : changes ");
  }, [items]);

  return (
    <>
      FormModeler
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Grid columns={24} className="mt-6 text-sm">
          <Grid.Col span={8} className="border-gray-500 border border-solid">
            {/* <Draggable id="test"> DRAG ME</Draggable> */}
            <ToolboxPanel></ToolboxPanel>
          </Grid.Col>
          <Grid.Col span={16} className="border-gray-500 border border-solid relative">
            <LoadingOverlay visible={false} />
            <form>
              <FormPanel></FormPanel>
            </form>
          </Grid.Col>
        </Grid>
        <DragOverlay dropAnimation={null}>
          {draggingItem?.active?.data?.current?.control ? (
            <ControlItem name={draggingItem?.active?.id}></ControlItem>
          ) : null}
          {draggingItem?.active?.data?.current?.formItem ? (
            <>
              {/* {draggingItem?.active.id} */}
              <div className="bg-white">
                <FormItem {...draggingItem?.active.data.current.formItem}></FormItem>
              </div>
            </>
          ) : null}
        </DragOverlay>
      </DndContext>
      <Code mt="30">
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </Code>
      ;
    </>
  );

  function handleDragStart(event: any) {
    console.log("🚀 ~ file: FormisModeler.tsx:61 ~ handleDragStart ~ event:", event);
    // setControl(event?.active?.id);
    setDraggingItem(event);
    // console.log(event);
    setIsDragging(true);
  }

  function handleDragEnd(event: any) {
    if (!event.over) return;
    // console.log(
    //   "🚀 ~ file: FormisModeler.tsx:67 ~ handleDragEnd ~ event:",
    //   event
    // );

    console.log("event : ", { ...event });
    setDraggingItem(null);
    setIsDragging(false);

    const id = event.over.id;

    const { control, formItem } = event.active.data.current;

    if (!control && !formItem) return;

    if (formItem) {
      console.log("formItem : ", formItem);
      console.log(id);
      dispatch({
        type: "replace",
        payload: {
          id: formItem.id,
          next: id,
        },
      });
      return;
    }

    const item = control || formItem;

    console.log("item : ", item);
    console.log("id : ", id);
    // const x = event.over?.data?.current?.x;
    // let y = event.over?.data?.current?.y;

    // if (item.type == FormItemTypeEnum.Grid) {
    //   addItem(
    //     {
    //       type: FormItemTypeEnum.Col,
    //       x: 0,
    //       y : 0
    //     },
    //     y
    //   );
    //   addItem(
    //     {
    //       type: FormItemTypeEnum.Col,
    //       x: 1,
    //       y : 0
    //     },
    //     y
    //   );
    // }

    // addItem(
    //   {
    //     ...item,
    //     // x,
    //     // y: y + 1,
    //   },
    //   id
    // );

    dispatch({
      type: "add",
      payload: {
        item : {...item},
        _id: id,
      },
    });
  }
};

export default FormModeler;
