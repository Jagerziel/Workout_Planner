import React from 'react'

import right_arrow from '/public/right-arrow.png' 

export default function ArrowImg( { direction } ) {
  let arrowDirectionVar = arrowDirection(direction)

  function arrowDirection ( input ) {
    if (input === 'up') return 'rotate(270deg)'
    if (input === 'right') return 'rotate(0deg)'
    if (input === 'down') return 'rotate(90deg)'
    if (input === 'left') return 'rotate(180deg)'
    return 'rotate(0)'
  }

  const styles = {
    ArrowImgContainer: {
      backgroundColor: '#242424',
      borderRadius: '50%',
      height: '30px',
      aspectRatio: '1/1'
    },
    ArrowImg: {
      height: '30px',
      aspectRatio: '1/1',
      transform: arrowDirectionVar,
      filter: 'invert(99%) sepia(11%) saturate(95%) hue-rotate(284deg) brightness(113%) contrast(100%)'
    }
  }
  return (
    <div
      style={styles.ArrowImgContainer}
    >
      <img 
        src={right_arrow} 
        alt='Image Not Available'
        className='ArrowImg'
        style={styles.ArrowImg}
        />
    </div>
  )
}


