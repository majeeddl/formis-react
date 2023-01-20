import React, { Component } from "react";
import { Col, Grid, Divider } from "@mantine/core";
import Item from "./controls/Item";
import { FormItemTypeEnum } from "../../../components/form/FormItem";

const controlsList = [
  {
    type: "_divider",
    label: "Elements",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.Label,
    label: "Label",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.Input,
    label: "Text Input",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.Textarea,
    label: "Text Area",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.NumberInput,
    label: "Number Input",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.Radio,
    label: "Radio",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.Checkbox,
    label: "Checkbox",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.Switch,
    label: "Switch",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.Select,
    label: "Select",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.MultiSelect,
    label: "Multi Select",
    // icon: "test",
  },
  {
    type: FormItemTypeEnum.Button,
    label: "Button",
    // icon: "test",
  },
  {
    type: "_divider",
    label: "Layout",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.Grid,
    label: "Grid",
    icon: "test",
  },
  {
    type: FormItemTypeEnum.Divider,
    label: "Divider",
    icon: "test",
  },
];

const Controls = () => {
  return (
    <Grid gutter="xs">
      {controlsList.map((control, index) => {
        if (control.type == "_divider") {
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
