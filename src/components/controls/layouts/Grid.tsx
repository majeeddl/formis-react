import React, { FC } from "react";
import { Grid as MantineGrid } from "@mantine/core";
import Col from "./grid/Col";
import { ControlStateEnum } from "../../Control";
import DropArea from "../../form/DropArea";

type GridPropsType = {
  state?: ControlStateEnum;
  columns?: number;
  spans?: number[];
};

const Grid: FC<GridPropsType> = ({
  state = ControlStateEnum.View,
  columns = 24,
  spans = [12, 12],
}) => {
  return (
    <>
      <MantineGrid columns={columns}>
        {spans.map((span, index) => (
          <Col span={span} key={`s_${span}_${index}`}>
            12
            {
              // state == ControlStateEnum.Edit && (
              <DropArea accept="box"></DropArea>
              // )
            }
          </Col>
        ))}
      </MantineGrid>
    </>
  );
};

export default Grid;
