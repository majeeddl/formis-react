import React, { Dispatch, FunctionComponent, createContext, useState } from "react";

import { MantineProvider, createTheme } from "@mantine/core";

import { ModalsProvider } from "@mantine/modals";

import "@mantine/core/styles.css";
import "../assets/main.scss";
import { useFormis } from "./hooks/formis.hook";
import FormModeler from "./FormisModeler";
import { create } from "cypress/types/lodash";

type FormisPropsType = {
  items?: any[];
  rtl?: boolean;
  useFormis: ReturnType<typeof useFormis>;
};

export const FormisContext = createContext(null);
export const FormisDispatchContext = createContext<Dispatch<any> | null>(null);

export const formReducer = (
  state: any,
  action: {
    type: "add" | "replace" | "delete";
    payload: any;
  }
) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: 3,
          type: "button",
          label: "button",
          parent: null,
        },
      ];
    case "replace":
      return state.map((item: any) => {
        if (item.id == action.payload.id) {
          return action.payload;
        }
        return item;
      });
    case "delete":
      return state.filter((item: any) => item.id != action.payload);
    default:
      return state;
  }
};

const Formis = ({ rtl = false, useFormis }: FormisPropsType) => {
  const theme = createTheme({
    /** Your theme override here */
  });

  const [items, dispatch] = React.useReducer(formReducer, useFormis.items);

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <FormisContext.Provider value={items}>
          <FormisDispatchContext.Provider value={dispatch}>
            <FormModeler useFormis={useFormis}></FormModeler>
          </FormisDispatchContext.Provider>
        </FormisContext.Provider>
        {/* <FormModeler useFormis={useFormis}></FormModeler> */}
      </ModalsProvider>
    </MantineProvider>
  );
};

export default Formis;
