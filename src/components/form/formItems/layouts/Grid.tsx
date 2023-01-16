import React, { FC } from "react";
import { Grid as MantineGrid } from "@mantine/core";
import Col from "./grid/Col";
import { FormItemStateEnum } from "../../FormItem";
import DropArea from "../../DropArea";


type GridPropsType = {
  state?: FormItemStateEnum;
  columns?: number;
  spans?: number[];
};

const Grid: FC<GridPropsType> = ({
  state = FormItemStateEnum.View,
  columns = 24,
  spans = [12, 12],
}) => {
  return (
    <>
      GRID
      <MantineGrid columns={columns}>
        {spans.map((span, index) => (
          <Col span={span} key={`s_${span}_${index}`}>
            {
              // state == FormItemStateEnum.Edit && (
              <DropArea accept="box" index={index} parent={null}></DropArea>
              // )
            }
          </Col>
        ))}
      </MantineGrid>
    </>
  );
};

export default Grid;
