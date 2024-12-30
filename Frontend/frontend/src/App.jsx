import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Add from './Components/Add'
import View from './Components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar/>
        <Routes>
        <Route path="/Add" element={<Add />} />
        <Route path="/View" element={<View />} />
          </Routes>
        
        
    </>
  )
}

export default App
