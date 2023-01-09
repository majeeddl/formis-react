import React from "react";
import { NumberInput as NumberInputMantine } from "@mantine/core";
const NumberInput = ({
  label = "number input",
  description = "",
  placeholder = "",
  required = false,
  value =null,
  onChange = (e) => {
    console.log(e);
  },
}) => {
  //  const [chekcboxValue, setChekcboxValue] = useState(value);

  const customAttr: any = {};

  if (required) {
    customAttr["withAsterisk"] = true;
  }

  return (
    <>
      <NumberInputMantine
        label={label}
        description={description}
        placeholder={placeholder}
        // value={value}
        onChange={onChange}
        {...customAttr}
      ></NumberInputMantine>
    </>
  );
};

export default NumberInput;
