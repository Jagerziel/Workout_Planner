// Import React
import React from 'react'
// Import CSS
import './SixteenWkPlan.scss'
// Import Components
import NavItem from '../components/directories/NavItem.jsx';
// Import Data
import { sixteenWkDirectory } from '../data/data.js';

export default function SixteenWkPlan() {

  return (
    <div className='SixteenWkPlan-container'>
      <div className='SixteenWkPlanItems-container'>
        {sixteenWkDirectory.map((data, index) => <NavItem data={data} key={index} />)}
      </div>
    </div>
  )
}
