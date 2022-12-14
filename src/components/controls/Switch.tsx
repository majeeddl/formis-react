import React from "react";
import { Switch as SwitchMantine } from "@mantine/core";
const Switch = ({
  // checked,
  label = "",
  size = "md",
  color = null, //color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
  error = "",
  onChange = () => {},
}) => {
  return (
    <>
      <SwitchMantine
        label={label}
        //@ts-ignore
        size={size}
        onChange={onChange}
        // checked={checked}
        error={error}
      ></SwitchMantine>
    </>
  );
};

export default Switch;
