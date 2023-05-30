import react from "react";
import { Grid, Box, TextInput, Checkbox, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
const MantineForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      termsOfService: false,
    },

    validate: {
      name: (value) => (value.length > 3 ? null : "Name must be longer than 3"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <div>MantineForm</div>

      <Button onClick={() => form.setFieldError("name", "Invalid email")}>
        set error
      </Button>

      <div>
        <Box>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Grid>
              <Grid.Col span={6}>
                {" "}
                <TextInput
                  withAsterisk
                  label="Name"
                  placeholder="name"
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                {" "}
                {/* <TextInput
                  withAsterisk
                  label="Email"
                  placeholder="your@email.com"
                  {...form.getInputProps("email")}
                /> */}
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...form.getInputProps("email")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Checkbox
                  mt="md"
                  label="I agree to sell my privacy"
                  {...form.getInputProps("termsOfService", {
                    type: "checkbox",
                  })}
                />
                {/* {console.log(form.getInputProps("email"))} */}
              </Grid.Col>
            </Grid>

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </div>
    </>
  );
};

export default MantineForm;
