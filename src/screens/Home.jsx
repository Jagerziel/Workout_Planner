// Import React
import React from 'react'
// Import CSS
import './Home.scss'
// Import Components
import HomeItem from '../components/directories/HomeItem.jsx';

// State Management
import { useSelector, useDispatch } from "react-redux";



export default function Home() {

  const homeDirectoryData = useSelector((state) => state.homeDirectory.data)


  // console.log(homeDirectoryData)
  return (
    <div className='Home-container'>
      <div className='HomeItems-container'>
        {homeDirectoryData.map((data, index) => <HomeItem data={data} key={index} />)}
      </div>
      
    </div>
    

  )
}
