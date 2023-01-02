import React from "react";
import { Col, Grid } from "@mantine/core";
import Item from "./controls/Item";

const controlsList = [
  {
    type: "label",
    label: "Label",
    icon: "test",
  },
  {
    type: "text",
    label: "Text Input",
    icon: "test",
  },
  {
    type: "",
    label: "Text Area",
    icon: "test",
  },
  {
    type: "number",
    label: "Number Input",
    icon: "test",
  },
  {
    type: "radio",
    label: "Radio",
    icon: "test",
  },
  {
    type: "checkbox",
    label: "Checkbox",
    icon: "test",
  },
  {
    type: "grid",
    label: "Grid",
    icon: "test",
  },
];

const Controls = () => {
  return (
    <Grid gutter="xs">
      {controlsList.map((control) => (
        <Col span={6} key={control.type}>
          <Item
            name={control.label}
            data-cy={`control-item-${control.type}`}
          ></Item>
        </Col>
      ))}
    </Grid>
  );
};

export default Controls;
