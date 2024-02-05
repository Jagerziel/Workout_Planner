// Import React
import React, { useRef, useState } from 'react'
// Import CSS
import './Custom.scss'
// Import Framer Motion
import PageTransitionFade from '../hooks/framer-motion/PageTransitionFade.jsx'
// Import Redux
import { useSelector, useDispatch } from "react-redux";

export default function Custom() {
  // Redux: Workout Data
  const [selectedExercises, exerciseData] = useSelector((state) => state.customExerciseData.data)

  const createMenu = [
    "create new workout",
    "edit workout",
  ]

  // console.log(exerciseData)



  return (
    <PageTransitionFade>
      <div className='Custom-container'>
        <div className='Custom-title'>
          Customized Workout
        </div>
        <div className='Custom-menu'>
          {`(${selectedExercises.length === 0 ? createMenu[0] : createMenu[1]})`}
        </div>
        <div className='Custom-workout-container'>
          CONTENT PLACEHOLDER
        </div>
      </div>
    </PageTransitionFade>
  )
}
