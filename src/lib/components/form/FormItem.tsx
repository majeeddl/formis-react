import { ActionIcon, Group, Switch, Text, Tabs } from "@mantine/core";
import Input from "./formItems/Input";
import Divider from "./formItems/layouts/Divider";
import Grid from "./formItems/layouts/Grid";
import Radio from "./formItems/Radio";
import Checkbox from "./formItems/Checkbox";
import NumberInput from "./formItems/NumberInput";
import Select from "./formItems/Select";
import Textarea from "./formItems/Textarea";
import Button from "./formItems/Button";
import { IconArrowsMove, IconTrash } from "@tabler/icons-react";
import { useFormStore } from "../../store/form.store";
import { modals } from "@mantine/modals";
import { useFormis } from "../../hooks/formis.hook";

export enum FormItemStateEnum {
  View = "view",
  Edit = "edit",
  Lock = "lock",
}

export enum FormItemTypeEnum {
  Grid = "grid",
  Col = "col",
  Divider = "divider",
  Card = "card",
  Tabs = "tabs",
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

export interface FormItemProps {
  id?: string;
  x: number;
  y: number;
  index?: number;
  label?: string;
  state?: FormItemStateEnum;
  type: FormItemTypeEnum;
  selected?: boolean;
  setActivatorNodeRef?: any;
  listeners?: any;
  useFormis: ReturnType<typeof useFormis>;
}

const FormItem = ({
  state = FormItemStateEnum.View,
  type,
  index,
  listeners,
  selected = false,
  setActivatorNodeRef,
  useFormis,
  ...props
}: FormItemProps) => {

  const { deleteItem , selectItem , mode } = useFormis;

  const openModal = () =>
    modals.openConfirmModal({
      title: "Delete Confirmation",
      centered: true,
      children: (
        <Text size="sm" color="red" fw={700}>
          Are you sure you want to delete this item? This action is irreversible
        </Text>
      ),
      labels: { confirm: "Yes I am sure", cancel: "No don't" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => deleteItem(props?.id),
    });

  return (
    <>
      <div
        className={`form-item-box`}
        style={{
          border: ` ${selected ? "1px solid #228be6" : "1px solid silver"}`,
          borderLeft: ` ${selected ? "3px solid #228be6" : "3px solid silver"}`,
          padding: 5,
        }}
        onClick={() => selectItem(props?.id)}
      >
        <Group justify="space-between">
          <Group>
            <Text size="xs">
              {props.id} - index: {index} - x : {props.x} - y : {props.y}
            </Text>
          </Group>
          <Group gap="xs">
            <ActionIcon variant="transparent" color="red.8" size={"sm"}>
              <IconTrash onClick={() => openModal()}></IconTrash>
            </ActionIcon>
            <IconArrowsMove size={20} className="cursor-move" {...setActivatorNodeRef} {...listeners}></IconArrowsMove>
          </Group>
        </Group>
        {type == FormItemTypeEnum.Grid && <Grid {...props}></Grid>}
        {type == FormItemTypeEnum.Divider && <Divider {...props}></Divider>}
        {type == FormItemTypeEnum.Label && <label>{props.label}</label>}

        {type == FormItemTypeEnum.Input && <Input {...props}></Input>}
        {type == FormItemTypeEnum.NumberInput && <NumberInput {...props}></NumberInput>}
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
