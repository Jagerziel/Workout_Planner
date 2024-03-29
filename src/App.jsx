import { Route, Routes } from 'react-router-dom'
import './App.scss'

// Import Components
import Navbar from './components/navbar/Navbar.jsx'
import Home from './screens/Home.jsx' // Primary Menu
import SixteenWkPlan from './screens/SixteenWkPlan.jsx' // Primary Menu
  import Wk0104 from './screens/SixteenWkPlan/Wk0104.jsx'
  import Wk0508 from './screens/SixteenWkPlan/Wk0508.jsx'
  import Wk0912 from './screens/SixteenWkPlan/Wk0912.jsx'
  import Wk1316 from './screens/SixteenWkPlan/Wk1316.jsx'
import UDWomensRugbyPlan from './screens/UDWomensRugbyPlan.jsx' // Primary Menu
  import UDWk01 from './screens/UDWomensRugbyPlan/UDWk01.jsx'
  import UDWk02 from './screens/UDWomensRugbyPlan/UDWk02.jsx'
  import UDWk03 from './screens/UDWomensRugbyPlan/UDWk03.jsx'
import Browse from './screens/Browse.jsx' // Primary Menu
import Custom from './screens/Custom.jsx' // Primary Menu
  import CustomBrowse from './screens/Custom/CustomBrowse.jsx'
  import CustomOrder from './screens/Custom/CustomOrder.jsx'
import About from './screens/About.jsx' // Primary Menu

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
            <Route path="/udwomensrugbyplan" element={<UDWomensRugbyPlan />} />
            <Route path="/udwomensrugbyplan/wk01" element={<UDWk01 />} />
            <Route path="/udwomensrugbyplan/wk02" element={<UDWk02 />} />
            <Route path="/udwomensrugbyplan/wk03" element={<UDWk03 />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/custom/browse" element={<CustomBrowse />} />
            <Route path="/custom/browse/order" element={<CustomOrder />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Provider>
    </>
  )
}

export default App
