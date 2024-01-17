import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'

// Import Components
import Navbar from './components/navbar/Navbar.jsx'
import Home from './screens/Home.jsx'
import TwelveWkPlan from './screens/TwelveWkPlan.jsx'
import Browse from './screens/Browse.jsx'
import Custom from './screens/Custom.jsx'

// Lazy Load Components
// const Home = lazy(() => import('./screens/Home.jsx'))
// const TwelveWkPlan = lazy(() => import('./screens/TwelveWkPlan.jsx'))
// const Browse = lazy(() => import('./screens/Browse.jsx'))
// const Custom = lazy(() => import('./screens/Custom.jsx'))


// State Management
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

function App() {

  return (
    <>
      <Provider store={ store }>
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
      </Provider>
    </>
  )
}

export default App
