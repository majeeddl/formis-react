import React, { FC } from "react";
import { Grid } from "@mantine/core";

interface ColPropsType extends React.ComponentPropsWithoutRef<typeof MantineCol> {
  span: number;
  children?: any;
}

const Col = ({ span, children, ...props }: ColPropsType) => {
  return (
    <>
      <Grid.Col
        // span={span} lg={span}
        span={span}
        {...props}
      >
        {children}
      </Grid.Col>
    </>
  );
};

export default Col;
