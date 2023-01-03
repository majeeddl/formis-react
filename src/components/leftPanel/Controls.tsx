import React from "react";
import { Col, Grid,Divider } from "@mantine/core";
import Item from "./controls/Item";

const controlsList = [
  {
    type: "_divider",
    label: "Elements",
    icon: "test",
  },
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
    type: "select",
    label: "Select",
    icon: "test",
  },
  {
    type: "multiSelect",
    label: "Multi Select",
    icon: "test",
  },
  {
    type: "_divider",
    label: "Layout",
    icon: "test",
  },
  {
    type: "grid",
    label: "Grid",
    icon: "test",
  },
  {
    type: "divider",
    label: "Divider",
    icon: "test",
  },
];

const Controls = () => {
  return (
    <Grid gutter="xs">
      {controlsList.map((control,index) => {

        if(control.type == '_divider'){
          return (
            <Col span={12} key={`${control.type}_${index}`}>
              <Divider my="xs" label={control.label} />
            </Col>
          );
        }

        return (
          <Col span={6} key={control.type}>
            <Item
              name={control.label}
              data-cy={`control-item-${control.type}`}
              {...control}
            ></Item>
          </Col>
        );
      })}
    </Grid>
  );
};

export default Controls;
