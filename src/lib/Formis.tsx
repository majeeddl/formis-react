import React, { FunctionComponent, useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import { FormisModeler, FormisViewer } from ".";
import { FormisProvider } from "../store/FormisProvider";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});

type FormisPropsType = {
  items: any[];
  rtl?: boolean;
};

const Formis: FunctionComponent<FormisPropsType> = ({
  rtl = false,
  items = [],
}) => {
  const [_rtl, _setRtl] = useState(rtl);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ dir: _rtl ? "rtl" : "ltr" }}
      emotionCache={_rtl ? rtlCache : undefined}
    >
      <FormisProvider items={items}>
        <>
          <FormisModeler></FormisModeler>
          <FormisViewer></FormisViewer>
        </>
      </FormisProvider>
    </MantineProvider>
  );
};

export default Formis;
