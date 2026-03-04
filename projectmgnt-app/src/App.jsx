import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard'
import ProjectInfo from './ProjectInfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/Project/:id' element={<ProjectInfo/>}/>
  </Routes>
  </BrowserRouter>

  )
}

export default App
