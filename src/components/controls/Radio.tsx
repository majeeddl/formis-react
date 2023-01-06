import React, { useState } from "react";
import { Radio as RadioMantine } from "@mantine/core";
import { v4 } from "uuid";

const Radio = ({
  label = "",
  description = "",
  required = false,
  values = [],
  value = null,
  onChange = ()=>{},
  ...props
}) => {

  const [radioValue, setRadioValue] = useState(value)

  const customAttr: any = {};

  if (required) {
    customAttr["withAsterisk"] = true;
  }

  return (
    <>
      <RadioMantine.Group
        name=""
        label={label}
        description={description}
        value={radioValue}
        onChange={setRadioValue}
        {...customAttr}
      >
        {values.map(({ label: _label, value: _value }, index) => (
          <RadioMantine key={v4()} value={_value} label={_value} />
        ))}
      </RadioMantine.Group>
    </>
  );
};

export default Radio;
