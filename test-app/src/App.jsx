import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountWithConditionalRendering from './CountWithConditionalRendering'
import RegisterFrom from './Components/RegisterFrom'
import PostList from './Components/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CountWithConditionalRendering /> 
     <RegisterFrom/>
     <PostList/>
    </>
  )
}

export default App
