import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Navbar from './Component/Navbar'
// import Header from './Component/Header'
import Footer from './Component/Footer'
import ProductInfo from './Component/ProductInfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { cartReducer ,initialCartState} from './cartReducer/cartReducer'
import cartPage from './Pages/cartPage'


function App() {
  const [user,setUser] = useState()


  return (

    <BrowserRouter>
      {/* <Header /> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginPage setUser={setUser}/>}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard user={user}/>}></Route>
        <Route path='/:ID' element={<ProductInfo/>}></Route>
        <Route path='/cart' element={<cartPage/>}></Route>
        <Route path='/nav' element={<Navbar/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

    //  <BrowserRouter>
    //  <Routes>
    //   <Route path='/' element={<Dashboard/>}></Route>
    //   <Route path='/:ID' element={<ProductInfo/>}></Route>
    //  </Routes>
    //  </BrowserRouter>



    //<Register/>
    // <LoginPage/>

  )
}

export default App
