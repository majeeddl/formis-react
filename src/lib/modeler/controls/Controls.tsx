import React from "react";
import { Button, Col, Grid } from "@mantine/core";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Item from "./Item";

const controlsList = [
  {
    type: "label",
    label: "label",
    icon: "test",
  },
  {
    type: "text",
    label: "text",
    icon: "test",
  },
];

const Controls = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Grid>
          {controlsList.map((control) => (
            <Col span={6}>
              <Item name={control.type}></Item>
            </Col>
          ))}
        </Grid>
      </DndProvider>
    </>
  );
};

export default Controls;
