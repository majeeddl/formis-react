import React from "react";
import { Input as InputMantine } from "@mantine/core";

const Input = ({
  label = "input",
  description = "",
  placeholder = "",
  icon = null,
  disabled = false,
  invalid = false,
  required = false,
  error = "",
  ...props
}) => {
  return (
    <>
      {/* <InputMantine icon={icon} placeholder={placeholder} disabled invalid /> */}
      <InputMantine.Wrapper
        withAsterisk={required}
        label={label}
        description={description}
        error={error}
      >
        <InputMantine
          placeholder={placeholder}
          disabled={disabled}
          invalid={invalid}
          {...(icon ? { icon } : {})}
          {...props}
        />
      </InputMantine.Wrapper>
    </>
  );
};

export default Input;
