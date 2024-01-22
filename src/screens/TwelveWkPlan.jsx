// Import React
import React from 'react'
// Import CSS
import './TwelveWkPlan.scss'
// Import Components
import NavItem from '../components/directories/NavItem.jsx';
// Import Data
import { twelveWkDirectory } from '../data/data.js';

// State Management 
import { useSelector, useDispatch } from "react-redux";

export default function TwelveWkPlan() {

  return (
    <div className='Home-container'>
      <div className='HomeItems-container'>
        {twelveWkDirectory.map((data, index) => <NavItem data={data} key={index} />)}
      </div>
    </div>
  )
}
