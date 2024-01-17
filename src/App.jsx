import { Route, Routes } from 'react-router-dom'
import './App.scss'

// Import Components
import Navbar from './components/navbar/Navbar.jsx'
import Home from './screens/Home.jsx'
import TwelveWkPlan from './screens/TwelveWkPlan.jsx'
import Browse from './screens/Browse.jsx'
import Custom from './screens/Custom.jsx'
import About from './screens/About.jsx'

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
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Provider>
    </>
  )
}

export default App
