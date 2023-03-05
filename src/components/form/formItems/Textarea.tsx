import React from "react";
import { Textarea as TextareaMantine } from "@mantine/core";

const Textarea = ({
  label = "Textarea",
  description = "",
  placeholder = "",
  icon = false,
  disabled = false,
  invalid = false,
  required = false,
  error = "",
  ...props
}) => {
  return (
    <>
      <TextareaMantine
        label={label}
        description={description}
        error={error}
        withAsterisk={required}
        placeholder={placeholder}
        disabled={disabled}
        autosize
        {...(icon ? { icon } : {})}
        {...props}
      />
    </>
  );
};

export default Textarea;
