import React, { Component } from "react";
import { Grid, Divider } from "@mantine/core";
import ControlItem, { ItemDragTargetTypeEnums } from "./controls/Item.control";

import { controlsList } from "./controls/list.control";
import { DragOverlay } from "@dnd-kit/core";
import ControlDraggable from "./controls/Draggable.control";

const Controls = () => {
  return (
    <Grid gutter="xs">
      {controlsList.map((control, index) => {
        if (control.type == "_divider") {
          return (
            <Grid.Col span={12} key={`${control.type}_${index}`}>
              <Divider my="xs" label={control.label} />
            </Grid.Col>
          );
        }

        return (
          <Grid.Col span={6} key={control.type}>
            <ControlDraggable id={control.label} control={control}>
              <ControlItem name={control.label} data-cy={`control-item-${control.type}`} {...control}></ControlItem>
            </ControlDraggable>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default Controls;
