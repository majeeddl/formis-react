import React, { FunctionComponent } from "react";
import Input from "./controls/Input";
import Divider from "./controls/layouts/Divider";
import Grid from "./controls/layouts/Grid";

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
}

export type ControlProps = {
  state?: ControlStateEnum;
  type: ControlTypeEnum;
};

const Control = ({ state = ControlStateEnum.View, type }: ControlProps) => {
  return (
    <>
      <div className="control-box">
        {type == ControlTypeEnum.Grid && <Grid></Grid>}
        {type == ControlTypeEnum.Divider && <Divider></Divider>}
        {type == ControlTypeEnum.Input && <Input></Input>}
      </div>
    </>
  );
};

export default Control;
