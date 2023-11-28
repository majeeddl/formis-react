import React, { useEffect } from "react";
import { Input as InputMantine, TextInput, TextInputProps } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useFormisContext, useFormisDispatchContext } from "../../../context/formis.context";

export type TInputProps = TextInputProps & {
  id: string;
  required?: boolean;
  dirty?: boolean;
};

const Input = ({
  id,
  name = "name",
  label = "input",
  description = "",
  placeholder = "",
  leftSection = null,
  disabled = false,
  // invalid = false,
  required = false,
  dirty = false,
  error = "",
  value = "",
  ...props
}: TInputProps) => {
  const { dispatchItems } = useFormisDispatchContext();

  const handleOnChange = (e: any) => {
    let _error = "";

    if (required) {
      if (e.target.value.length == 0) _error = "This field is required";
    }

    dispatchItems({
      type: "update",
      payload: {
        id,
        value: e.target.value,
        error: _error,
        dirty: true,
      },
    });
  };

  return (
    <>
      <TextInput
        label={label}
        description={description}
        placeholder={placeholder}
        withAsterisk={required}
        disabled={disabled}
        {...(leftSection ? { leftSection } : {})}
        {...props}
        value={value}
        onChange={handleOnChange}
        error={error}
      ></TextInput>
    </>
  );
};

export default Input;
