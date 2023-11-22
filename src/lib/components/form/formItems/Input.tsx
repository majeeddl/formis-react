import React from "react";
import { Input as InputMantine, TextInput, TextInputProps } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useFormisContext } from "../../../context/formis.context";

export type TInputProps = TextInputProps & {
  required?: boolean;
  form: ReturnType<typeof useForm>;
};

const Input = ({
  name = "name",
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
  const { form } = useFormisContext();

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
        placeholder={placeholder}
        withAsterisk={required}
        disabled={disabled}
        {...(leftSection ? { leftSection } : {})}
        {...props}
        {...form.getInputProps(name)}
      ></TextInput>
    </>
  );
};

export default Input;
