import React, { memo, useEffect, useState } from "react";
import { Checkbox as CheckboxMantine, CheckboxProps, Group } from "@mantine/core";
import { v4 } from "uuid";
import { useFormisContext, useFormisDispatchContext } from "../../../context/formis.context";

export type TCheckboxProps = CheckboxProps & {
  id: string;
  required?: boolean;
  datasource: {
    type: "client" | "server";
    data: {
      key: string;
      value: string;
      linked: boolean;
    }[];
  };
  value?: any[];
  dirty?: boolean;
};

const Checkbox = ({
  id,
  label = "check box",
  description = "",
  // defaultValue = [],
  required = false,
  disabled = false,
  value = [],
  datasource = {
    type: "client",
    data: [],
  },
  error = "",
  dirty = false,
}: TCheckboxProps) => {
  const [checkboxValue, setCheckboxValue] = useState<any[]>(value);
  const { dispatchItems } = useFormisDispatchContext();
  const customAttr: any = {};

  if (required) {
    customAttr["withAsterisk"] = true;
    if (checkboxValue.length == 0 && dirty) error = "This field is required";
  }

  const onChange = (_value: any) => {
    setCheckboxValue(_value);
    let _error = "";
    if (_value.length == 0) {
      if (required) _error = "This field is required";
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
  };

  return (
    <>
      <CheckboxMantine.Group
        label={label}
        description={description}
        value={checkboxValue}
        onChange={onChange}
        error={error}
        {...customAttr}
      >
        <Group>
          {datasource?.data.map(({ key: _label, value: _value }, index) => (
            <CheckboxMantine key={`${v4()}`} value={_value} label={_label} disabled={disabled} />
          ))}
        </Group>
      </CheckboxMantine.Group>
    </>
  );
};

export default memo(Checkbox);
