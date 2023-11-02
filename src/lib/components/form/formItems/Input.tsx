import React from "react";
import { Input as InputMantine, TextInput, TextInputProps } from "@mantine/core";
import { useForm } from "@mantine/form";

export type TInputProps = TextInputProps & {
  required?: boolean;
  form: ReturnType<typeof useForm>;
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
  form,
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
        {...form.getInputProps("name")}
      ></TextInput>
    </>
  );
};

export default Input;
