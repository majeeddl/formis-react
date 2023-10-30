import React from "react";

import { Grid } from "@mantine/core";

import "./GridView.css";
const GridView = () => {
  return (
    <>
      <div>GridView</div>

      <div className="mt-2"> mantine grid :</div>
      <div className="mt-2">
        <Grid>
          <Grid.Col className="mantineGridGrid.Col" span={12}>
            12 span
          </Grid.Col>
          <Grid.Col className="mantineGridGrid.Col" span={6}>
            6 span
          </Grid.Col>
          <Grid.Col className="mantineGridGrid.Col" span={6}>
            6 span
          </Grid.Col>
        </Grid>

        <div className="mt-2"> fit content :</div>
        <Grid className="mt-3">
          <Grid.Col className="mantineGridGrid.Col" span="content">
            fit content
          </Grid.Col>
          <Grid.Col className="mantineGridGrid.Col" span="auto">
            2
          </Grid.Col>
        </Grid>

        <div className="mt-2"> responsive :</div>
        <Grid className="mt-2">
          <Grid.Col
            className="mantineGridGrid.Col"
            span={{
              md: 6,
            }}
          >
            1
          </Grid.Col>
          <Grid.Col
            className="mantineGridGrid.Col"
            span={{
              md: 6,
            }}
          >
            2
          </Grid.Col>
          <Grid.Col
            className="mantineGridGrid.Col"
            span={{
              md: 6,
            }}
          >
            3
          </Grid.Col>
          <Grid.Col
            className="mantineGridGrid.Col"
            span={{
              md: 6,
            }}
          >
            4
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default GridView;
