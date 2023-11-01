import { TFormItemType } from "../../../components/form/FormItem";
// import { TGridColProps } from "../../../components/form/formItems/layouts/Grid";

export const controlsList: {
  type: TFormItemType | "_divider";
  label: string;
}[] = [
  {
    type: "_divider",
    label: "Elements",
    // icon: "test",
  },
  {
    type: "label",
    label: "Label",
    // icon: "test",
  },
  {
    type: "input",
    label: "Text Input",
    // icon: "test",
  },
  {
    type: "textarea",
    label: "Text Area",
    // icon: "test",
  },
  {
    type: "number",
    label: "Number Input",
    // icon: "test",
  },
  {
    type: "radio",
    label: "Radio",
    // icon: "test",
  },
  {
    type: "checkbox",
    label: "Checkbox",
    // icon: "test",
  },
  {
    type: "switch",
    label: "Switch",
    // icon: "test",
  },
  {
    type: "select",
    label: "Select",
    // icon: "test",
  },
  {
    type: "multiSelect",
    label: "Multi Select",
    // icon: "test",
  },
  {
    type: "button",
    label: "Button",
    // icon: "test",
  },
  {
    type: "_divider",
    label: "Layout",
    // icon: "test",
  },
  {
    type: "grid",
    label: "Grid",
    cols: [],
  },
  {
    type: "divider",
    label: "Divider",

    // icon: "test",
  },
  {
    type: "card",
    label: "Card",
  },
  {
    type: "tabs",
    label: "Tabs",
  },
];
