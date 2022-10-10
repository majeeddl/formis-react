import React, { useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { createEmotionCache, MantineProvider } from "@mantine/core";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});

const FormisViewer = () => {
  const [rtl, setRtl] = useState(false);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={rtlCache}
      theme={{ dir: "rtl" }}
    >
      <div>FormisViewer</div>
    </MantineProvider>
  );
};

export default FormisViewer;
