

import { useState } from 'react'
import './App.css'
import { MovieProvider } from './Context/MovieContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from './Components/MovieList'
import AddMovie from './Components/AddMovie'
import MovieDetails from './Components/MovieDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/AddMovie' element={<AddMovie />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
        </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  )
}

export default App


