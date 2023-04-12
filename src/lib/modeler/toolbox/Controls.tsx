import React, { Component } from "react";
import { Col, Grid, Divider } from "@mantine/core";
import Item, { ItemDragTargetTypeEnums } from "./controls/Item.control";

import { controlsList } from "./controls/list.control";
import { DragOverlay } from "@dnd-kit/core";

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
