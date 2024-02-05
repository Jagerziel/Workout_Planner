// Import React
import React, { useRef, useState } from 'react'
// Import CSS
import './Custom.scss'
// Import Framer Motion
import PageTransitionFade from '../hooks/framer-motion/PageTransitionFade.jsx'
// Import Redux
import { useSelector, useDispatch } from "react-redux";

export default function Custom() {
  const [ exercises, setExercises ] = useState([])
  const [ selectedExercises, setSelectedExercises ] = useState([])
  const createMenu = [
    "create new workout",
    "edit workout",
  ]

  const test = ["apple", "pear"]
  const [apple, pear] = test
  console.log(apple)

  // Redux: Workout Data
  const exerciseData = useSelector((state) => state.exerciseData.data)

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
