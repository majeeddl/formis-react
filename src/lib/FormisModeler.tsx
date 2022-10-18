import { Card, Grid } from "@mantine/core";
import React from "react";

const FormModeler = () => {
  return (
    <>
      FormModeler
      <Grid columns={24}>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <div>salam</div>
          </Card>
        </Grid.Col>
        <Grid.Col span={20}>
          <Card shadow="sm" p="lg" radius="md" withBorder bo>
            <div>salam</div>
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default FormModeler;
