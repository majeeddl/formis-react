import { ActionIcon, Group, Switch, Text } from "@mantine/core";
import Input, { TInputProps } from "./formItems/Input";
import Divider from "./formItems/layouts/Divider";
import Grid, { TGridColProps, TGridProps } from "./formItems/layouts/Grid";
import Tabs from "./formItems/layouts/Tabs";
import Radio from "./formItems/Radio";
import Checkbox from "./formItems/Checkbox";
import NumberInput from "./formItems/NumberInput";
import Select from "./formItems/Select";
import Textarea from "./formItems/Textarea";
import Button, { TButtonProps } from "./formItems/Button";

import { IconArrowsMove, IconTrash } from "@tabler/icons-react";
import { useFormStore } from "../../store/form.store";
import { modals } from "@mantine/modals";
import { useFormis } from "../../hooks/formis.hook";
import { memo, useEffect } from "react";
import FormItemWrapper from "./formItems/FormItemWrapper";

// export enum FormItemStateEnum {
//   View = "view",
//   Edit = "edit",
//   Lock = "lock",
// }

// export enum FormItemTypeEnum {
//   Grid = "grid",
//   Col = "col",
//   Divider = "divider",
//   Card = "card",
//   Tabs = "tabs",
//   Label = "label",
//   Input = "input",
//   NumberInput = "number",
//   Textarea = "textarea",
//   Radio = "radio",
//   Checkbox = "checkbox",
//   Switch = "switch",
//   Select = "select",
//   MultiSelect = "multiSelect",
//   Button = "button",
// }

export type TFormItemType =
  | "grid"
  | "col"
  | "divider"
  | "card"
  | "tabs"
  | "label"
  | "input"
  | "number"
  | "textarea"
  | "radio"
  | "checkbox"
  | "switch"
  | "select"
  | "multiSelect"
  | "button";

export type TFormState = "view" | "edit" | "lock";

export enum FormItemSizeEnum {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

type TBaseItemProps = TGridProps & TGridColProps & TInputProps & TButtonProps;

export type TFormItemProps = TBaseItemProps & {
  useFormis: ReturnType<typeof useFormis>;
  id?: string;
  // x: number;
  // y: number;
  index?: number;
  name?: string;
  label?: string;
  state?: TFormState;
  type: TFormItemType;
  parent?: string | null;
  ancestors?: string[];
  selected?: boolean;

  styles?: any;

  // props?: TGridProps | TInputProps | TButtonProps;
  // items ?: TFormItemProps[];

  setActivatorNodeRef?: any;
  listeners?: any;
};

const FormItem = ({
  state = "view",
  type,
  index,
  listeners,
  selected = false,
  setActivatorNodeRef,
  useFormis,
  ...props
}: TFormItemProps) => {
  const { deleteItem, selectItem, mode } = useFormis;

  // const openModal = () =>
  //   modals.openConfirmModal({
  //     title: "Delete Confirmation",
  //     centered: true,
  //     children: (
  //       <Text size="sm" color="red" fw={700}>
  //         Are you sure you want to delete this item? This action is irreversible
  //       </Text>
  //     ),
  //     labels: { confirm: "Yes I am sure", cancel: "No don't" },
  //     confirmProps: { color: "red" },
  //     onCancel: () => console.log("Cancel"),
  //     onConfirm: () => deleteItem(props?.id),
  //   });

  // useEffect(() => {
  //   console.log("selected has been changed")
  // }, []);

  return (
    <>
      <FormItemWrapper
        useFormis={useFormis}
        selected={selected}
        id={props?.id}
        index={index}
        listeners={listeners}
        setActivatorNodeRef={setActivatorNodeRef}
        {...props}
      >
        {type == "grid" && <Grid useFormis={useFormis} {...props}></Grid>}
        {type == "tabs" && <Tabs {...props}></Tabs>}
        {type == "divider" && <Divider {...props}></Divider>}

        {type == "label" && <label>{props.label}</label>}

        {type == "input" && <Input {...props}></Input>}
        {type == "number" && <NumberInput {...props}></NumberInput>}
        {type == "textarea" && <Textarea {...props}></Textarea>}

        {type == "radio" && <Radio {...props}></Radio>}
        {type == "checkbox" && <Checkbox {...props}></Checkbox>}
        {type == "switch" && <Switch {...props}></Switch>}

        {type == "select" && <Select {...props}></Select>}
        {type == "button" && <Button {...props}></Button>}
        {/* </div> */}
      </FormItemWrapper>
    </>
  );
};

export default memo(FormItem);
