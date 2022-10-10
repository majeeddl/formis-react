

import React, { FunctionComponent, useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { createEmotionCache, MantineProvider } from "@mantine/core";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});


type FormisPropsType = {
    rtl : boolean
}

const Formis : FunctionComponent<FormisPropsType> = ({ rtl }) => {
  const [_rtl, _setRtl] = useState(rtl);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ dir: _rtl ? "rtl" : "ltr" }}
      emotionCache={_rtl ? rtlCache : undefined}
    >
      <div>Formis</div>
    </MantineProvider>
  );
};

export default Formis;