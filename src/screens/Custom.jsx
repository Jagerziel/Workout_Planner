// Import React
import React from 'react'
// Import CSS
import './Custom.scss'
// Import Framer Motion
import PageTransitionFade from '../hooks/framer-motion/PageTransitionFade.jsx'


export default function Custom() {
  return (
    <PageTransitionFade>
      <div>Custom</div>
    </PageTransitionFade>
  )
}
