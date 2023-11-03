import { Grid, Switch, TextInput } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";

const Settings = () => {
  const [size, setSize] = useState("xs");

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      name: "firstname",
      label: "firstname",
      description: "",
      placeholder: "",
      required: false,
      disabled: false,
      validate: (value: any) => console.log(value),
    },
    validate: {
      name: hasLength({ min: 3, max: 20 }, "Name must be between 3 and 20 characters"),
    },
  });

  useEffect(() => {
    console.log(JSON.stringify(form.values));
  }, [form.values]);
  return (
    <>
      <form onChange={(e: any) => console.log(e.target?.value)}>
        <TextInput label="Name" {...form.getInputProps("name")} size={size} withAsterisk></TextInput>
        <TextInput label="Label" {...form.getInputProps("label")} size={size}></TextInput>
        <TextInput label="Description" {...form.getInputProps("description")} size={size}></TextInput>
        <TextInput label="Placeholder" {...form.getInputProps("placeholder")} size={size}></TextInput>
        <Grid>
          <Grid.Col span={6} mt={"xs"}>
            <Switch label="Required" {...form.getInputProps("required")} size={size}></Switch>
          </Grid.Col>
          <Grid.Col span={6} mt={"xs"}>
            <Switch label="Disabled" {...form.getInputProps("disabled")} size={size}></Switch>
          </Grid.Col>
        </Grid>
      </form>
    </>
  );
};

export default Settings;
