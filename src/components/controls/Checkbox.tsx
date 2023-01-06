import React from "react";
import { Checkbox as CheckboxMantine } from "@mantine/core";

const Checkbox = ({
  label = "Select your favorite framework/library",
  description = "This is anonymous",
  // defaultValue = [],
  required = false,
  value = [],
  values = [{ label: "text", value: "value" }],
  onChange = () => {},
}) => {

  //  const [chekcboxValue, setChekcboxValue] = useState(value);

  const customAttr: any = {};

  if (required) {
    customAttr["withAsterisk"] = true;
  }

  return (
    <>
      <CheckboxMantine.Group
        // defaultValue={defaultValue}
        label={label}
        description={description}
        value={value}
        onChange={onchange}
        {...customAttr}
      >
        {values.map(({ label: _label, value: _value }: any, index) => {
          <CheckboxMantine key={`${index}`} value={_value} label={_label} />;
        })}
      </CheckboxMantine.Group>
    </>
  );
};

export default Checkbox;
