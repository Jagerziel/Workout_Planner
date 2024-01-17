// Import React
import React from 'react'
// Import CSS
import './Home.scss'
// Import Components
import NavItem from '../components/directories/NavItem.jsx';

// State Management
import { useSelector, useDispatch } from "react-redux";



export default function Home() {

  const homeDirectoryData = useSelector((state) => state.homeDirectory.data)


  // console.log(homeDirectoryData)
  return (
    <div className='Home-container'>
      <div className='HomeItems-container'>
        {homeDirectoryData.map((data, index) => <NavItem data={data} key={index} />)}
      </div>
      
    </div>
    

  )
}
