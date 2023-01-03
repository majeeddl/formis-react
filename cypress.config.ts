import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "zbnriw",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  env : {

  },
  e2e: {
    baseUrl : "http://localhost:9999",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env : {
      
    }
  },
});
