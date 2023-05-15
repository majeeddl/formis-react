import React, { FunctionComponent, useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import {  createEmotionCache, MantineProvider } from "@mantine/core";
import { FormisModeler, FormisViewer } from ".";
import { ModalsProvider } from "@mantine/modals";


import "../assets/main.scss";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});

type FormisPropsType = {
  items?: any[];
  rtl?: boolean;
};

const Formis: FunctionComponent = ({
  rtl = false,
  items = [],
}: FormisPropsType) => {
  const [_rtl, _setRtl] = useState(rtl);

  return (
    // <Provider store={store}>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ dir: _rtl ? "rtl" : "ltr" }}
      emotionCache={_rtl ? rtlCache : undefined}
    >
      {/* <FormisProvider items={items}> */}
      <ModalsProvider>
        <FormisModeler></FormisModeler>
        <FormisViewer></FormisViewer>
      </ModalsProvider>
      <></>
      {/* </FormisProvider> */}
    </MantineProvider>
    // </Provider>
  );
};

export default Formis;
