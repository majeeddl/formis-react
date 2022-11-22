import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { store} from "../src/store/store"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  (story: any) => (
    <DndProvider debugMode={true} backend={HTML5Backend}>
      <Provider store={store}>{story()}</Provider>
    </DndProvider>
  ),
];