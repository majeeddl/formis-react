import { Card, Grid } from "@mantine/core";
import React from "react";
import LeftPanel from "./modeler/LeftPanel";

const FormModeler = () => {
  return (
    <>
      FormModeler
      <Grid columns={24} className="mt-6 text-sm">
        <Grid.Col span={8} className="border-gray-500 border border-solid">
          {/* <Card shadow="sm" p="lg" radius="md" withBorder>
            <div>salam</div>
          </Card> */}

          <LeftPanel></LeftPanel>
        </Grid.Col>
        <Grid.Col span={12} className="border-gray-500 border border-solid">
          {/* <Card shadow="sm" p="lg" radius="md" withBorder>
            <div>salam</div>
          </Card> */}
        </Grid.Col>
      </Grid>
    </>
  );
};

export default FormModeler;
