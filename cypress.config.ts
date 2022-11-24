import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'zbnriw',
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
