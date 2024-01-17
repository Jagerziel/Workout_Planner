import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'

// Import Components
import Navbar from './components/navbar/Navbar.jsx'

// Lazy Load Components
// const Navbar = lazy(() => import('./components/navbar/Navbar.jsx'))


function App() {

  return (
    <>
      <Navbar />
      <div className='App'>
        Starting Page
      </div>
    </>
  )
}

export default App
