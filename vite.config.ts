import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import dts from "vite-plugin-dts";
import VitePluginStyleInject from "vite-plugin-style-inject";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    VitePluginStyleInject(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.tsx"),
      name: "FormisReact",
      formats: ["es", "umd"],
      fileName: (format) => `formis-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
