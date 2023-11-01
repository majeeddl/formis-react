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
import { FormisContext, FormisDispatchContext } from "./Formis";

type FormisModelerProps = {
  items?: any;
  onChange?: (items: any) => {};
  onSave?: (items: any) => {};
  useFormis: ReturnType<typeof useFormis>;
};
// show me an example of forwardRef with type annotation in typescript react

const FormModeler = ({ useFormis }: FormisModelerProps) => {
  const items = useContext(FormisContext);
  const dispatch = useContext(FormisDispatchContext);
  const { addItem, replaceItem } = useFormis;

  const form = useForm({});

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
  }, [useFormis.items]);

  return (
    <>
      FormModeler
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Grid columns={24} className="mt-6 text-sm">
          <Grid.Col span={8} className="border-gray-500 border border-solid">
            {/* <Draggable id="test"> DRAG ME</Draggable> */}
            <ToolboxPanel>{/* <Draggable id="test"> DRAG ME</Draggable> */}</ToolboxPanel>
          </Grid.Col>
          <Grid.Col span={16} className="border-gray-500 border border-solid relative">
            <LoadingOverlay visible={false} />
            <form>
              <FormPanel useFormis={useFormis}></FormPanel>
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
                {/* salam */}
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
      replaceItem(formItem.id, id);
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
        ...item,
        parent: id,
      },
    });
  }
};

export default FormModeler;
