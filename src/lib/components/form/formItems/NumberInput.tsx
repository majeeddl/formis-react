import React, { useState } from "react";
import { NumberInput as NumberInputMantine, NumberInputProps } from "@mantine/core";
import { useFormisDispatchContext } from "../../../context/formis.context";

export type TNumberInputProps = NumberInputProps & {
  id: string;
  value: any;
  dirty: boolean;
};

const NumberInput = ({
  id,
  label = "number input",
  description = "",
  placeholder = "",
  required = false,
  disabled = false,
  value = null,
  error = "",
  dirty = false,
  ...props
}: TNumberInputProps) => {
  const { dispatchItems } = useFormisDispatchContext();
  const [numberValue, setNumberValue] = useState(value);

  const customAttr: any = {};

  if (required) {
    customAttr["withAsterisk"] = true;
    if (typeof numberValue != "number" && dirty) error = "This field is required";
  }

  const handleChange = (_value: any) => {
    let _error = "";

    if (required && _value == null) {
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

    setNumberValue(_value);
  };

  return (
    <>
      <NumberInputMantine
        label={label}
        description={description}
        placeholder={placeholder}
        disabled={disabled}
        value={numberValue}
        onChange={handleChange}
        error={error}
        {...customAttr}
        {...props}
      ></NumberInputMantine>
    </>
  );
};

export default NumberInput;
