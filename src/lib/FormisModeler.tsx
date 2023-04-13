import { Card, Grid, Loader, LoadingOverlay } from "@mantine/core";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useItemStore } from "../store/item.store";

import { DndContext, DragOverlay } from "@dnd-kit/core";

import FormPanel from "./modeler/Form.panel";
import ToolboxPanel from "./modeler/Toolbox.panel";
import Draggable from "../views/dnd/Draggable";
import Droppable from "../views/dnd/Droppable";
import ControlItem from "./modeler/toolbox/controls/Item.control";

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
  const items = useItemStore((state: any) => state.items);

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
        <Droppable id="draggable"></Droppable>
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
      {/* </DndProvider> */}
    </>
  );

  function handleDragStart(event: any) {
    console.log(event);
    setControl(event?.active?.id);
    setIsDragging(true);
  }

  function handleDragEnd(event: any) {
    console.log(event);
    setControl("");
    setIsDragging(false);
  }
};

export default FormModeler;
