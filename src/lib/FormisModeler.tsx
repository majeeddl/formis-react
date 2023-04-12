import { Card, Grid, Loader, LoadingOverlay } from "@mantine/core";
import React, { FunctionComponent, useEffect } from "react";
import { useItemStore } from "../store/item.store";

import { DndContext } from "@dnd-kit/core";

import FormPanel from "./modeler/Form.panel";
import ToolboxPanel from "./modeler/Toolbox.panel";
import Draggable from "../views/dnd/Draggable";
import Droppable from "../views/dnd/Droppable";

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

  // useEffect(() => {
  //   console.log("items : ", items);
  //   onChange(items);
  // }, [items]);

  return (
    <>
      FormModeler
      <DndContext onDragStart={() => console.log("start")}>
        <Draggable id="test"> DRAG ME</Draggable>
        <Droppable></Droppable>
        <Grid columns={24} className="mt-6 text-sm">
          <Grid.Col span={8} className="border-gray-500 border border-solid">
            <ToolboxPanel></ToolboxPanel>
          </Grid.Col>
          <Grid.Col
            span={16}
            className="border-gray-500 border border-solid relative"
          >
            <LoadingOverlay visible={false} overlayBlur={2} />
            <FormPanel></FormPanel>
          </Grid.Col>
        </Grid>
      </DndContext>
      {/* </DndProvider> */}
    </>
  );
};

export default FormModeler;
