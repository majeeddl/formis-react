import React, { useState } from "react";
import { Textarea as TextareaMantine } from "@mantine/core";
import { useFormisDispatchContext } from "../../../context/formis.context";
import { set } from "cypress/types/lodash";

export type TTextareaProps = {
  id: string;
  label?: string;
  description?: string;
  placeholder?: string;
  icon?: any;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  error?: string;
  value?: string;
  dirty?: boolean;
};

const Textarea = ({
  id,
  label = "Textarea",
  description = "",
  placeholder = "",
  icon = false,
  disabled = false,
  invalid = false,
  required = false,
  value = "",
  error = "",
  dirty = false,
  ...props
}: TTextareaProps) => {
  const { dispatchItems } = useFormisDispatchContext();

  const [_value, setValue] = useState(value);

  const handleChange = (event: any) => {
    const _value = event.target.value;

    let _error = "";

    if (required && !_value) {
      _error = "This field is required";
    }
    dispatchItems({
      type: "update",
      payload: {
        id,
        value: _value,
        error: _error,
        dirty: true,
      },
    });

    setValue(_value);
  };

  if (required && !_value && dirty) error = "This field is required";

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
        value={_value}
        onChange={handleChange}
      />
    </>
  );
};

export default Textarea;
