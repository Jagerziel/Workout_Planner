// Import React
import React, { useRef, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// Import CSS
import './Custom.scss'
// Import Components
import WorkoutShellItem from '../components/workouts/WorkoutShellItem.jsx'
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
    navigate('browse')
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
          <div className='Custom-workout-subcontainer'>
            {
              selectedExercises.map((selectedIdx, index) => (
                <div key={index}>
                  <WorkoutShellItem exerciseDataItem={exerciseData[selectedIdx]}/>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </PageTransitionFade>
  )
}
