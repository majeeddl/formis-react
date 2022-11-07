import { Card, Grid } from "@mantine/core";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Dustbin } from "../views/dragAndDrop/Dustbin";
import LeftPanel from "./modeler/LeftPanel";
import RightPanel from "./modeler/RightPanel";

const FormModeler = () => {
  return (
    <>
      FormModeler
      <DndProvider debugMode={true} backend={HTML5Backend}>
        <Grid columns={24} className="mt-6 text-sm">
          <Grid.Col span={8} className="border-gray-500 border border-solid">
            {/* <Card shadow="sm" p="lg" radius="md" withBorder>
            <div>salam</div>
          </Card> */}

            <LeftPanel></LeftPanel>
          </Grid.Col>
          <Grid.Col span={12} className="border-gray-500 border border-solid">
            <RightPanel></RightPanel>
          </Grid.Col>
        </Grid>
      </DndProvider>
    </>
  );
};

export default FormModeler;
