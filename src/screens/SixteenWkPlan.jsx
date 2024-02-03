// Import React
import React from 'react'
// Import CSS
import './SixteenWkPlan.scss'
// Import Components
import NavItem from '../components/directories/NavItem.jsx';
// Import Data
import { sixteenWkDirectory } from '../data/data.js';
// Import Framer Motion
import PageTransitionFade from '../hooks/framer-motion/PageTransitionFade.jsx';

export default function SixteenWkPlan() {

  return (
    <PageTransitionFade>
      <div className='SixteenWkPlan-container'>
        <div className='SixteenWkPlanItems-container'>
          {sixteenWkDirectory.map((data, index) => <NavItem data={data} key={index} />)}
        </div>
      </div>
    </PageTransitionFade>
  )
}
