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

  return (
    <>
      <SelectMantine
        name=""
        label={label}
        description={description}
        withAsterisk={required}
        // value={value}
        data={data}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default Select;
