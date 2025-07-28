/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import product from './data.'
function App() {
    const [isRegistered, setIsRegister] = useState(false)
  return (
    <>
    {isRegistered ? (<LoginPage />) : (<RegisterPage setIsRegister={setIsRegister} />)}
     
      < Dashboard />
    </>
  )
}

export default App