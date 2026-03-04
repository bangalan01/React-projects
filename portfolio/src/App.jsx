import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import Projects from './Pages/Projects'
import ContactUs from './Pages/ContactUs'
import'./Pages/CSS/HomePage.css'
import'./Components/Nav.css'
import'./Pages/CSS/About.css' 
import'./Pages/CSS/Project.css'
import'./Pages/CSS/ContactUs.css'
import'./Components/Footer.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/About-Us' element={<AboutUs/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='/Contact-Us' element={<ContactUs/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
