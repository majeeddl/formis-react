import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { FormisViewer, FormisModeler } from "./lib/index";

function App() {
  return (
    <div className="App">
      <FormisModeler></FormisModeler>

      <FormisViewer></FormisViewer>
    </div>
  );
}

export default App;
