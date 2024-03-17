// Import React
import React, { useState, useEffect } from 'react'
// Import CSS
import './SixteenWkPlan.scss'
// Import Components
import NavItem from '../components/directories/NavItem.jsx';
// Import Data
import { sixteenWkDirectory } from '../data/data.js';
// Import Framer Motion
import PageTransitionFade from '../hooks/framer-motion/PageTransitionFade.jsx';

export default function SixteenWkPlan() {

  /* MEDIA QUERY FOR CONTAINER SIZING */
  // Size of Window
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  })
  
  // Update size object when window is resized
  function updateSize () {
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    })
  }
  
  useEffect(() => (window.onresize = updateSize), [])
  
  // Customized media query for react to override CSS
  function mediaQuery ( columns ) {
    if (size.x > 1800) return columns < 10 ? columns : 10
    else if (size.x > 1600) return columns < 9 ? columns : 9
    else if (size.x > 1400) return columns < 8 ? columns : 8
    else if (size.x > 1230) return columns < 7 ? columns : 7
    else if (size.x > 1100) return columns < 6 ? columns : 6
    else if (size.x > 1000) return columns < 5 ? columns : 5
    else if (size.x > 800) return columns < 4 ? columns : 4
    else if (size.x > 560) return columns < 3 ? columns : 3
    else if (size.x > 360) return columns < 2 ? columns : 2
    else if (size.x >= 0) return columns < 1 ? columns : 1
  }
  /* MEDIA QUERY FOR CONTAINER SIZING END */


  return (
    <PageTransitionFade>
      <div className='SixteenWkPlan-container'>
        <div 
          className='SixteenWkPlanItems-container'
          style={{
            '--m': mediaQuery(sixteenWkDirectory.length)
          }}
        >
          {sixteenWkDirectory.map((data, index) => <NavItem data={data} key={index} />)}
        </div>
      </div>
    </PageTransitionFade>
  )
}
