import React from "react";
import { Col, Grid,Divider } from "@mantine/core";
import Item from "./controls/Item";
import { ControlTypeEnum } from "../Control";

const controlsList = [
  {
    type: "_divider",
    label: "Elements",
    icon: "test",
  },
  {
    type: ControlTypeEnum.Label,
    label: "Label",
    icon: "test",
  },
  {
    type: ControlTypeEnum.Input,
    label: "Text Input",
    icon: "test",
  },
  {
    type: ControlTypeEnum.TextArea,
    label: "Text Area",
    icon: "test",
  },
  {
    type: ControlTypeEnum.NumberInput,
    label: "Number Input",
    icon: "test",
  },
  {
    type: ControlTypeEnum.Radio,
    label: "Radio",
    icon: "test",
  },
  {
    type: ControlTypeEnum.Checkbox,
    label: "Checkbox",
    icon: "test",
  },
  {
    type: ControlTypeEnum.Switch,
    label: "Switch",
    icon: "test",
  },
  {
    type: ControlTypeEnum.Select,
    label: "Select",
    icon: "test",
  },
  {
    type: ControlTypeEnum.MultiSelect,
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
