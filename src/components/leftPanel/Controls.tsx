import React from "react";
import { Col, Grid } from "@mantine/core";
import Item from "./controls/Item";

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
  {
    type: "radio",
    label: "radio",
    icon: "test",
  },
  {
    type: "grid",
    label: "grid",
    icon: "test",
  },
];

const Controls = () => {
  return (
      <Grid gutter="xs">
        {controlsList.map((control:any) => (
          <Col span={6} key={control.type}>
            <Item name={control.type}></Item>
          </Col>
        ))}
      </Grid>
  );
};

export default Controls;
