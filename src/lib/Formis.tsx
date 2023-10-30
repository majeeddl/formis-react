import React, { FunctionComponent, useState } from "react";

import { MantineProvider, createTheme } from "@mantine/core";

import { ModalsProvider } from "@mantine/modals";

import "@mantine/core/styles.css";
import "../assets/main.scss";
import { useFormis } from "./hooks/formis.hook";
import FormModeler from "./FormisModeler";

type FormisPropsType = {
  items?: any[];
  rtl?: boolean;
  useFormis: ReturnType<typeof useFormis>;
};

const Formis = ({ rtl = false, items = [], useFormis }: FormisPropsType) => {
  const theme = createTheme({
    /** Your theme override here */
  });

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <FormModeler useFormis={useFormis}></FormModeler>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default Formis;
