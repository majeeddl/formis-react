import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { HelloFormis} from "./lib/index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <HelloFormis></HelloFormis>
    </div>
  )
}

export default App
