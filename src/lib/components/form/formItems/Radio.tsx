import React, { useEffect, useState } from "react";
import { Flex, FlexProps, Group, Radio as RadioMantine, RadioProps } from "@mantine/core";
import { v4 } from "uuid";
import { useFormisContext, useFormisDispatchContext } from "../../../context/formis.context";

export type TRadioProps = RadioProps &
  FlexProps & {
    id: string;
    datasource: {
      type: "client" | "server";
      data: any[];
    };
    value: any;
    dirty: boolean;
  };

const Radio = ({
  id,
  name = "",
  label = "",
  description = "",
  required = false,
  direction = "row",
  datasource = {
    type: "client",
    data: [],
  },
  value = null,
  error = "",
  dirty = false,
  ...props
}: TRadioProps) => {
  const { dispatchItems } = useFormisDispatchContext();

  const [radioValue, setRadioValue] = useState(value);

  const customAttr: any = {};

  if (required) {
    customAttr["withAsterisk"] = true;
    if (!radioValue && dirty) error = "This field is required";
  }

  const handleChange = (_value: any) => {
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

    setRadioValue(_value);
  };

  return (
    <>
      <RadioMantine.Group
        label={label}
        description={description}
        value={radioValue}
        onChange={handleChange}
        {...customAttr}
      >
        <Flex direction={direction} gap="md" align="center">
          {datasource?.data.map(({ label: _label, value: _value }, index) => (
            <RadioMantine key={v4()} value={_value} label={_value} />
          ))}
        </Flex>
      </RadioMantine.Group>
    </>
  );
};

export default Radio;
