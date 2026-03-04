import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route>

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
