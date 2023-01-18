import { Switch } from "@mantine/core";
import Input from "./formItems/Input";
import Divider from "./formItems/layouts/Divider";
import Grid from "./formItems/layouts/Grid";
import Radio from "./formItems/Radio";
import Checkbox from "./formItems/Checkbox";
import NumberInput from "./formItems/NumberInput";
import Select from "./formItems/Select";
import Textarea from "./formItems/Textarea";
import Button from "./formItems/Button";

export enum FormItemStateEnum {
  View = "view",
  Edit = "edit",
  Lock = "lock",
}

export enum FormItemTypeEnum {
  Grid = "grid",
  Divider = "divider",
  Label = "label",
  Input = "input",
  NumberInput = "number",
  Textarea = "textarea",
  Radio = "radio",
  Checkbox = "checkbox",
  Switch = "switch",
  Select = "select",
  MultiSelect = "multiSelect",
  Button = "button",
}

export enum FormItemSizeEnum {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export type FormItemProps = {
  state?: FormItemStateEnum;
  type: FormItemTypeEnum;
};

const FormItem = ({
  state = FormItemStateEnum.View,
  type,
  ...props
}: FormItemProps) => {
  return (
    <>
      <div className="form-item-box">
        {type == FormItemTypeEnum.Grid && <Grid {...props}></Grid>}
        {type == FormItemTypeEnum.Divider && <Divider {...props}></Divider>}
        {type == FormItemTypeEnum.Input && <Input {...props}></Input>}
        {type == FormItemTypeEnum.NumberInput && (
          <NumberInput {...props}></NumberInput>
        )}
        {type == FormItemTypeEnum.Textarea && <Textarea {...props}></Textarea>}
        {type == FormItemTypeEnum.Radio && <Radio {...props}></Radio>}
        {type == FormItemTypeEnum.Checkbox && <Checkbox {...props}></Checkbox>}
        {type == FormItemTypeEnum.Switch && <Switch {...props}></Switch>}
        {type == FormItemTypeEnum.Select && <Select {...props}></Select>}
        {type == FormItemTypeEnum.Button && <Button {...props}></Button>}
      </div>
    </>
  );
};

export default FormItem;
