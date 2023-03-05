import React, { FunctionComponent, useState } from "react";
import { Provider } from "react-redux";
import rtlPlugin from "stylis-plugin-rtl";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import { FormisModeler, FormisViewer } from ".";
import { FormisProvider } from "../store/context/FormisProvider";
import { store } from "../store/redux/store";

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
      <>
        <FormisModeler></FormisModeler>
        <FormisViewer></FormisViewer>
      </>
      {/* </FormisProvider> */}
    </MantineProvider>
    // </Provider>
  );
};

export default Formis;
