import React, { FC } from "react";
import { Col as MantineCol } from "@mantine/core";

interface ColPropsType
  extends React.ComponentPropsWithoutRef<typeof MantineCol> {
  span: number;
  children?: any;
}

const Col = ({ span, children, ...props }: ColPropsType) => {
  return (
    <>
      <MantineCol span={span} lg={span} {...props}>
        {children}
      </MantineCol>
    </>
  );
};

export default Col;
