import React from 'react'
import {Divider as DividerMantine} from "@mantine/core"

const Divider = ({
  label="",
  size = "sm",
  orientation = "horizontal",
  labelPosition = "left",
}) => {
  return (
    <>
      <DividerMantine
        my="xs"
        label={label}
        orientation={orientation}
        labelPosition={null}
        size={size}
      />
    </>
  );
};

export default Divider