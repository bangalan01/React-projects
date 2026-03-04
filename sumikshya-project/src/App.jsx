import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import CounterReducer from './components/CounterReducer'
import CoinCollector from './components/CoinCollector'
import "bootstrap/dist/css/bootstrap.min.css";

import ConditionalRendering from './components/ConditionalRendering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ConditionalRendering/>
<CounterReducer/>
<CoinCollector/>
    <HeroSection/>
    </>
  )
}

export default App
