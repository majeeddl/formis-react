import React, { FC } from "react";
import { Col as MantineCol } from "@mantine/core";

type ColPropsType = {
  span: number;
  children?: any;
};

const Col: FC<ColPropsType> = ({ span, children }) => {
  return (
    <>
      <MantineCol span={span} lg={span}>{children}</MantineCol>
    </>
  );
};

export default Col;
