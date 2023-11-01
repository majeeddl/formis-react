import React, { FC } from "react";
import { Grid, GridColProps } from "@mantine/core";

interface ColPropsType extends GridColProps {
  children?: any;
}

const Col = ({ span, children, ...props }: ColPropsType) => {
  return (
    <>
      <Grid.Col span={span} {...props}>
        {children}
      </Grid.Col>
    </>
  );
};

export default Col;
