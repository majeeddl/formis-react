import { Card, Grid, Loader, LoadingOverlay } from "@mantine/core";
import React, { FunctionComponent, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useItemStore } from "../store/item.store";
import { useAppSelector } from "../store/redux/hooks";
import { Dustbin } from "../views/dragAndDrop/Dustbin";
import LeftPanel from "./modeler/LeftPanel";
import RightPanel from "./modeler/RightPanel";

type FormisModelerProps = {
  items?: any;
  onChange?: (items: any) => {};
  onSave?: (items: any) => {};
};

const FormModeler: FunctionComponent<FormisModelerProps> = ({
  onChange = () => {},
  onSave = () => {},
}) => {
  // const items = useAppSelector((state) => state.items.items);

  const items = useItemStore((state: any) => state.items);

  useEffect(() => {
    console.log("items : ", items);
    onChange(items);
  }, [items]);

  return (
    <>
      FormModeler
      <DndProvider debugMode={true} backend={HTML5Backend}>
        <Grid columns={24} className="mt-6 text-sm">
          <Grid.Col span={8} className="border-gray-500 border border-solid">
            <LeftPanel></LeftPanel>
          </Grid.Col>
          <Grid.Col
            span={16}
            className="border-gray-500 border border-solid relative"
          >
            <LoadingOverlay visible={false} overlayBlur={2} />
            <RightPanel></RightPanel>
          </Grid.Col>
        </Grid>
      </DndProvider>
    </>
  );
};

export default FormModeler;
