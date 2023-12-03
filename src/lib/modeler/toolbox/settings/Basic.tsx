import { Grid, Switch, TextInput } from "@mantine/core";
import React from "react";

const Basic = ({
  form,
  changeSettings,
  selectedItem,
  size,
}: {
  form: any;
  changeSettings: any;
  selectedItem: any;
  size: any;
}) => {
  return (
    <>
      <TextInput
        name="name"
        label="Name"
        {...form.getInputProps("name")}
        withAsterisk
        onChange={(e) => {
          changeSettings(e);
          form.getInputProps("name").onChange(e);
        }}
        size={size}
      ></TextInput>
      <TextInput
        label="Label"
        name="label"
        {...form.getInputProps("label")}
        onChange={(e) => {
          changeSettings(e);
          form.getInputProps("label").onChange(e);
        }}
        size={size}
      ></TextInput>

      <TextInput
        label="Description"
        name="description"
        {...form.getInputProps("description")}
        onChange={(e) => {
          changeSettings(e);
          form.getInputProps("description").onChange(e);
        }}
        size={size}
      ></TextInput>
      {selectedItem?.type == "input" && (
        <TextInput
          label="Placeholder"
          name="placeholder"
          {...form.getInputProps("placeholder")}
          onChange={(e) => {
            changeSettings(e);
            form.getInputProps("placeholder").onChange(e);
          }}
          size={size}
        ></TextInput>
      )}

      <Grid>
        <Grid.Col span={6} mt={"xs"}>
          <Switch
            label="Required"
            name="required"
            {...form.getInputProps("required", { type: "checkbox" })}
            onChange={(e) => {
              changeSettings(e);
              form.getInputProps("required").onChange(e);
            }}
            size={size}
          ></Switch>
        </Grid.Col>
        <Grid.Col span={6} mt={"xs"}>
          <Switch
            label="Disabled"
            name="disabled"
            {...form.getInputProps("disabled", { type: "checkbox" })}
            onChange={(e) => {
              changeSettings(e);
              form.getInputProps("disabled").onChange(e);
            }}
            size={size}
          ></Switch>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Basic;
