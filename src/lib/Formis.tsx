import React, { Dispatch, FunctionComponent, createContext, useState } from "react";

import { MantineProvider, createTheme } from "@mantine/core";

import { ModalsProvider } from "@mantine/modals";

import "@mantine/core/styles.css";
import "../assets/main.scss";
import { useFormis } from "./hooks/formis.hook";
import FormModeler from "./FormisModeler";
import { create } from "cypress/types/lodash";
import { FormisContextProvider } from "./context/formis.context";

type FormisPropsType = {
  items?: any[];
  rtl?: boolean;
  useFormis: ReturnType<typeof useFormis>;
};

const Formis = ({ rtl = false, useFormis }: FormisPropsType) => {
  const theme = createTheme({
    /** Your theme override here */
  });

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <FormisContextProvider useFormis={useFormis}>
          <FormModeler></FormModeler>
        </FormisContextProvider>
        {/* <FormModeler useFormis={useFormis}></FormModeler> */}
      </ModalsProvider>
    </MantineProvider>
  );
};

export default Formis;
