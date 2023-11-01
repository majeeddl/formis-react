import React, { useEffect, useState } from "react";
import { Group, Radio as RadioMantine } from "@mantine/core";
import { v4 } from "uuid";

const Radio = ({
  label = "",
  description = "",
  required = false,
  data = [
    {
      label: "yes",
      value: "yes",
    },
    {
      label: "no",
      value: "no",
    },
  ],
  value = null,
  onChange = (e:any) => {},
  ...props
}) => {
  const [radioValue, setRadioValue] = useState(value);

  const customAttr: any = {};

  if (required) {
    customAttr["withAsterisk"] = true;
  }

  useEffect(() => {
    onChange(radioValue);
  }, [radioValue]);
  return (
    <>
      <RadioMantine.Group
        name="test"
        label={label}
        description={description}
        value={radioValue}
        onChange={setRadioValue}
        {...customAttr}
      >
        <Group>
          {data.map(({ label: _label, value: _value }, index) => (
            <RadioMantine key={v4()} value={_value} label={_value} />
          ))}
        </Group>
      </RadioMantine.Group>
    </>
  );
};

export default Radio;
