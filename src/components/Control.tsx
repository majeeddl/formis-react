import React, { FunctionComponent } from "react";
import Grid from "./controls/layouts/Grid";

export enum ControlStateEnum {
  View = "view",
  Edit = "edit",
  Lock = "lock",
}

export enum ControlTypeEnum {
  Grid = "grid",
  Label = "label",
  Text = "text",
}

export type ControlProps = {
  state?: ControlStateEnum;
  type: ControlTypeEnum;
};

const Control: FunctionComponent<ControlProps> = ({
  state = ControlStateEnum.View,
  type,
}) => {
  return (
    <>
      <div className="control-box">
        <Grid state={state}></Grid>
      </div>
    </>
  );
};

export default Control;
