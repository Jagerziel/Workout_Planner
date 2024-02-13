// Import React
import React from 'react'
// Import CSS
import './About.scss'
// Import Framer Motion
import PageTransitionFade from '../hooks/framer-motion/PageTransitionFade.jsx'

export default function About() {
  return (
    <PageTransitionFade>
      <div>
        <p>This website was created for ease of performing exercises based on the recommended 16-week plan by a licensed professional for my own personal use</p>
        <p>This website is not intended to give any medical or other advice.  Use at your own risk.</p>
        <p>For developers: Feel free to fork/clone and edit for your own specific workouts (https://github.com/Jagerziel/Workout_Planner).  This website is front-end only (and contains no .env files).</p>
        <p>Hope it helps!</p>
        <p>--Jagerziel</p>
      </div>
    </PageTransitionFade>
  )
}
