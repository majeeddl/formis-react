import React from "react";

import { Grid, Col } from "@mantine/core";

import "./GridView.css";
const GridView = () => {
  return (
    <>
      <div>GridView</div>

      <div className="mt-2"> mantine grid :</div>
      <div className="mt-2">
        <Grid columns={24}>
          <Col className="mantineGridCol" span={12}>
            12 span
          </Col>
          <Col className="mantineGridCol" span={6}>
            6 span
          </Col>
          <Col className="mantineGridCol" span={6}>
            6 span
          </Col>
        </Grid>

        <div className="mt-2"> fit content :</div>
        <Grid className="mt-3">
          <Col className="mantineGridCol" span="content">
            fit content
          </Col>
          <Col className="mantineGridCol" span="auto">
            2
          </Col>
        </Grid>

        <div className="mt-2"> responsive :</div>
        <Grid className="mt-2" columns={24}>
          <Grid.Col className="mantineGridCol" md={12} lg={6}>
            1
          </Grid.Col>
          <Grid.Col className="mantineGridCol" md={12} lg={6}>
            2
          </Grid.Col>
          <Grid.Col className="mantineGridCol" md={12} lg={6}>
            3
          </Grid.Col>
          <Grid.Col className="mantineGridCol" md={12} lg={6}>
            4
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default GridView;
