import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { FormViewer,FormModeler} from "./lib/index"

function App() {

  return (
    <div className="App">
       <FormModeler></FormModeler>

       <FormViewer></FormViewer>
    </div>
  )
}

export default App
