import { useState } from 'react'
import './App.css'
import Calendar from './Component/Calendar'
import './Component/Calendar.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <Calendar/>
     </div>
  )
}

export default App
