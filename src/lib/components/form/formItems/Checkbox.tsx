import React, { memo } from "react";
import { Checkbox as CheckboxMantine, Group } from "@mantine/core";
import { v4 } from "uuid";

const Checkbox = ({
  label = "check box",
  description = "",
  // defaultValue = [],
  required = false,
  value = [],
  data = [
    { label: "item 1", value: "1" },
    { label: "item 2", value: "2" },
  ],
  onChange = (e: any) => {
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
      <CheckboxMantine.Group
        // defaultValue={defaultValue}
        label={label}
        description={description}
        // value={value}
        onChange={onChange}
        {...customAttr}
      >
        <Group>
          {data.map(({ label: _label, value: _value }, index) => (
            <CheckboxMantine key={`${v4()}`} value={_value} label={_label} />
          ))}
        </Group>
      </CheckboxMantine.Group>
    </>
  );
};

export default memo(Checkbox);
