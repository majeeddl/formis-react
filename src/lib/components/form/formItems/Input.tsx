import React from "react";
import { Input as InputMantine, TextInput, TextInputProps } from "@mantine/core";

export type TInputProps = TextInputProps & {
  required ?: boolean;
};

const Input = ({
  label = "input",
  description = "",
  placeholder = "",
  leftSection = null,
  disabled = false,
  // invalid = false,
  required = false,
  error = "",
  ...props
}: TInputProps) => {
  return (
    <>
      {/* {leftSection} */}
      {/* <InputMantine icon={icon} placeholder={placeholder} disabled invalid /> */}
      {/* <InputMantine.Wrapper
        withAsterisk={required}
        label={label}
        description={description}
        error={error}
      >
        <InputMantine
          placeholder={placeholder}
          disabled={disabled}
          // invalid={invalid}
          {...(leftSection ? { leftSection } : {})}
          {...props}
        />
      </InputMantine.Wrapper> */}

      <TextInput
        label={label}
        description={description}
        withAsterisk={required}
        {...(leftSection ? { leftSection } : {})}
        {...props}
      ></TextInput>
    </>
  );
};

export default Input;
