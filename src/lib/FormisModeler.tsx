import { Card, Grid, Loader, LoadingOverlay, TextInput } from "@mantine/core";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useItemStore } from "./store/item.store";

import { DndContext, DragOverlay } from "@dnd-kit/core";

import FormPanel from "./modeler/Form.panel";
import ToolboxPanel from "./modeler/Toolbox.panel";
import Draggable from "../views/dnd/Draggable";
import Droppable from "../views/dnd/Droppable";
import ControlItem from "./modeler/toolbox/controls/Item.control";
import { FormItemTypeEnum } from "./components/form/FormItem";
import { useFormStore } from "./store/form.store";

type FormisModelerProps = {
  items?: any;
  onChange?: (items: any) => {};
  onSave?: (items: any) => {};
};
// show me an example of forwardRef with type annotation in typescript react

const FormModeler: FunctionComponent<FormisModelerProps> = ({
  onChange = () => {},
  onSave = () => {},
}) => {
  const addItem = useFormStore((state) => state.addItem);

  const [isDragging, setIsDragging] = useState(false);
  const [control, setControl] = useState<string>("");
  // useEffect(() => {
  //   console.log("items : ", items);
  //   onChange(items);
  // }, [items]);

  return (
    <>
      FormModeler
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Grid columns={24} className="mt-6 text-sm">
          <Grid.Col span={8} className="border-gray-500 border border-solid">
            <ToolboxPanel>
              <Draggable id="test"> DRAG ME</Draggable>
            </ToolboxPanel>
          </Grid.Col>
          <Grid.Col
            span={16}
            className="border-gray-500 border border-solid relative"
          >
            <LoadingOverlay visible={false} overlayBlur={2} />
            <FormPanel></FormPanel>
          </Grid.Col>
        </Grid>
        <DragOverlay dropAnimation={null}>
          {isDragging ? <ControlItem name={control}></ControlItem> : null}
        </DragOverlay>
      </DndContext>
    </>
  );

  function handleDragStart(event: any) {
    // console.log(
    //   "🚀 ~ file: FormisModeler.tsx:61 ~ handleDragStart ~ event:",
    //   event
    // );
    setControl(event?.active?.id);
    setIsDragging(true);
  }

  function handleDragEnd(event: any) {
    if (!event.over) return;
    console.log(
      "🚀 ~ file: FormisModeler.tsx:67 ~ handleDragEnd ~ event:",
      event
    );

    console.log("event.active : ", { ...event.active.data.current.control });
    setControl("");
    setIsDragging(false);

    const data = event.active.data.current.control;
    const id = parseInt(event.over.id);

    console.log("id : ", id);

    addItem(
      {
        type: data.type,
        label: data.label,
      },
      id + 1
    );
  }
};

export default FormModeler;
