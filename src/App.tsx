import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { FormisViewer, FormisModeler } from "./lib/index";
import DragAndDrop from "./views/DragAndDrop";

function App() {
  return (
    <div className="App">
      {/* <FormisModeler></FormisModeler>
      <FormisViewer></FormisViewer> */}

      <DragAndDrop></DragAndDrop>
    </div>
  );
}

export default App;
