import React, { FunctionComponent, useState } from "react";

import { MantineProvider, createTheme } from "@mantine/core";

import { ModalsProvider } from "@mantine/modals";

import "@mantine/core/styles.css";
import "../assets/main.scss";

type FormisPropsType = {
  items?: any[];
  rtl?: boolean;
};

const Formis: FunctionComponent = ({ rtl = false, items = [] }: FormisPropsType) => {
  const theme = createTheme({
    /** Your theme override here */
  });

  return (
    <MantineProvider theme={theme}  >
      <ModalsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default Formis;
