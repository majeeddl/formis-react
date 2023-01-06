import { Switch } from "@mantine/core";;
import React, { FunctionComponent } from "react";
import Input from "./controls/Input";
import Divider from "./controls/layouts/Divider";
import Grid from "./controls/layouts/Grid";
import Radio from "./controls/Radio";
import Checkbox from "./controls/Checkbox";

export enum ControlStateEnum {
  View = "view",
  Edit = "edit",
  Lock = "lock",
}

export enum ControlTypeEnum {
  Grid = "grid",
  Divider = "divider",
  Label = "label",
  Input = "input",
  TextArea = "textarea",
  Radio = "radio",
  Checkbox = "checkbox",
  Switch = "switch",
  Select = "select",
  MultiSelect = "multiSelect"
}

export type ControlProps = {
  state?: ControlStateEnum;
  type: ControlTypeEnum;
};

const Control = ({ state = ControlStateEnum.View, type , ...props }: ControlProps) => {
  return (
    <>
      <div className="control-box">
        {type == ControlTypeEnum.Grid && <Grid {...props}></Grid>}
        {type == ControlTypeEnum.Divider && <Divider {...props}></Divider>}
        {type == ControlTypeEnum.Input && <Input {...props}></Input>}
        {type == ControlTypeEnum.TextArea && <Input {...props}></Input>}
        {type == ControlTypeEnum.Radio && <Radio {...props}></Radio>}
        {type == ControlTypeEnum.Checkbox && <Checkbox {...props}></Checkbox>}
        {type == ControlTypeEnum.Switch && <Switch {...props}></Switch>}
        {/* {type == ControlTypeEnum.Input && <Input></Input>} */}
      </div>
    </>
  );
};

export default Control;
