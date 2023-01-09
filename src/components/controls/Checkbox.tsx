import React from "react";
import { Checkbox as CheckboxMantine } from "@mantine/core";
import { v4 } from "uuid";

const Checkbox = ({
  label = "check box",
  description = "",
  // defaultValue = [],
  required = false,
  value = [],
  values = [
    { label: "item 1", value: "1" },
    { label: "item 2", value: "2" },
  ],
  onChange = (e) => {
    console.log(e);
  },
}) => {
  //  const [chekcboxValue, setChekcboxValue] = useState(value);

  const customAttr = {};

  if (required) {
    customAttr["withAsterisk"] = true;
  }

  return (
    <>
      <CheckboxMantine.Group
        // defaultValue={defaultValue}
        label={label}
        description={description}
        // value={value}
        onChange={onChange}
        {...customAttr}
      >
        {values.map(({ label: _label, value: _value }, index) => (
          <CheckboxMantine key={`${v4()}`} value={_value} label={_label} />
        ))}
      </CheckboxMantine.Group>
    </>
  );
};

export default Checkbox;
