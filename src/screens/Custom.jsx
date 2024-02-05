// Import React
import React, { useRef, useState } from 'react'
// Import CSS
import './Custom.scss'
// Import Framer Motion
import PageTransitionFade from '../hooks/framer-motion/PageTransitionFade.jsx'


export default function Custom() {
  const [ exercises, setExercises ] = useState([])



  return (
    <PageTransitionFade>
      <div>
        <div>
          Customized Workout
        </div>
        <div>

        </div>
      </div>
    </PageTransitionFade>
  )
}
