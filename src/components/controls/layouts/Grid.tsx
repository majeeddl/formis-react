import React, { FC } from "react";
import { Grid as MantineGrid } from "@mantine/core";
import Col from "./grid/Col";

type GridPropsType = {
  columns: number;
  spans: number[];
};

const Grid: FC<GridPropsType> = ({ columns = 24, spans = [6, 6, 6, 6] }) => {
  return (
    <>
      <MantineGrid columns={columns}>
        {spans.map((span) => {
          return <Col span={span}>{span}</Col>;
        })}
      </MantineGrid>
    </>
  );
};

export default Grid;
