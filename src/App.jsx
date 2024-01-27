import { Route, Routes } from 'react-router-dom'
import './App.scss'

// Import Components
import Navbar from './components/navbar/Navbar.jsx'
import Home from './screens/Home.jsx'
import SixteenWkPlan from './screens/SixteenWkPlan.jsx'
import Wk0104 from './screens/TwelveWkPlan/Wk0104.jsx'
import Wk0508 from './screens/TwelveWkPlan/Wk0508.jsx'
import Wk0912 from './screens/TwelveWkPlan/Wk0912.jsx'
import Wk1316 from './screens/TwelveWkPlan/Wk1316.jsx'
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
            <Route path="/sixteenwkplan" element={<SixteenWkPlan />} />
            <Route path="/sixteenwkplan/wk0104" element={<Wk0104 />} />
            <Route path="/sixteenwkplan/wk0508" element={<Wk0508 />} />
            <Route path="/sixteenwkplan/wk0912" element={<Wk0912 />} />
            <Route path="/sixteenwkplan/wk1316" element={<Wk1316 />} />
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
