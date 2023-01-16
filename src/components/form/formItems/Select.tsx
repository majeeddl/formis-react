import React, { useState } from "react";
import { Select as SelectMantine } from "@mantine/core";
import { v4 } from "uuid";

const Select = ({
  label = "",
  description = "",
  required = false,
  data = [
    { value: "React", label: "React" },
    { value: "Angular", label: "Angular" },
    { value: "Svelte", label: "Svelte" },
    { value: "Vue", label: "Vue" },
  ],
  value = null,
  onChange = () => {},
  icon = {},
  ...props
}) => {
  // const [SelectValue, setSelectValue] = useState(value)

  const customAttr: any = {};

  if (required) {
    customAttr["withAsterisk"] = true;
  }

  return (
    <>
      <SelectMantine
        name=""
        label={label}
        description={description}
        // value={value}
        data={data}
        onChange={onChange}
        {...customAttr}
        {...props}
      />
    </>
  );
};

export default Select;
