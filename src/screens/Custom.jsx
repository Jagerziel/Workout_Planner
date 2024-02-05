// Import React
import React, { useRef, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// Import CSS
import './Custom.scss'
// Import Framer Motion
import PageTransitionFade from '../hooks/framer-motion/PageTransitionFade.jsx'
// Import Redux
import { useSelector, useDispatch } from "react-redux";

export default function Custom() {
  // Redux: Workout Data
  const [selectedExercises, exerciseData] = useSelector((state) => state.customExerciseData.data)

  // Navigation 
  const navigate = useNavigate();

  const createMenu = [
    "press here to create new workout",
    "press here to edit current workout",
  ]

  function handleCustomizeWorkout () {
    // navigate('browse')
    console.log('navigation to browse button clicked')
  }

  // console.log(exerciseData)

  return (
    <PageTransitionFade>
      <div className='Custom-container'>
        <div className='Custom-title'>
          Customized Workout
        </div>
        <div 
          className='Custom-menu'
          onClick={handleCustomizeWorkout}
        >
          {`(${selectedExercises.length === 0 ? createMenu[0] : createMenu[1]})`}
        </div>
        <div className='Custom-workout-container'>
          CONTENT PLACEHOLDER
        </div>
      </div>
    </PageTransitionFade>
  )
}
