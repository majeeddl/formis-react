import React from "react";
import { Textarea as TextareaMantine } from "@mantine/core";

const Textarea = ({
  label = "Textarea",
  description = "",
  placeholder = "",
  icon = <></>,
  disabled = false,
  invalid = false,
  error = "",
  ...props
}) => {
  return (
    <>
      <TextareaMantine
        label={label}
        description={description}
        error={error}
        withAsterisk
        icon={icon}
        placeholder={placeholder}
        disabled={disabled}
        autosize
        {...props}
        // minRows={2}
        // maxRows={4}
      />
    </>
  );
};

export default Textarea;
