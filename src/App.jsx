import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './List'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <List></List>
    </div>
  )
}

export default App
