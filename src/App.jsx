import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'

// Import Components
import Navbar from './components/navbar/Navbar.jsx'

// Lazy Load Components
const Home = lazy(() => import('./screens/Home.jsx'))
const TwelveWkPlan = lazy(() => import('./screens/TwelveWkPlan.jsx'))
const Browse = lazy(() => import('./screens/Browse.jsx'))
const Custom = lazy(() => import('./screens/Custom.jsx'))

// const Navbar = lazy(() => import('./components/navbar/Navbar.jsx'))

function App() {

  return (
    <>
      <Navbar />
      <div className='Navbar-background'></div>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twelvewkplan" element={<TwelveWkPlan />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/custom" element={<Custom />} />
        </Routes>
      </div>
    </>
  )
}

export default App
