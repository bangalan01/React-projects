import React, { createContext,useState } from 'react'
import { Children } from 'react'

export const ThemeContext =createContext()

const ThemeProvider = ({children}) => {
  const [Theme,setTheme] = useState('light')

  function toggleTheme(){
    setTheme((prevTheme)=> prevTheme === 'light' ? 'dark' : 'light')
  }
  
    return (
    <ThemeContext.Provider value={{Theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
