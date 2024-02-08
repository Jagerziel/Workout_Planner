import React from 'react'

import triangle_down from '/public/triangle-down.png'

export default function TriangleImg( { direction } ) {
  let triangleDirectionVar = triangleDirection(direction)

  function triangleDirection ( input ) {
    if (input === 'up') return 'rotate(180deg)'
    if (input === 'right') return 'rotate(270deg)'
    if (input === 'down') return 'rotate(0deg)'
    if (input === 'left') return 'rotate(90deg)'
    return 'rotate(0)'
  }

  const styles = {
    TriangleImgContainer: {
      // backgroundColor: '#242424',
      // borderRadius: '50%',
      height: '30px',
      aspectRatio: '1/1'
    },
    TriangleImg: {
      height: '30px',
      aspectRatio: '1/1',
      transform: triangleDirectionVar,
      // filter: 'invert(99%) sepia(11%) saturate(95%) hue-rotate(284deg) brightness(113%) contrast(100%)'
    }
  }

  return (
    <div
      style={styles.TriangleImgContainer}
    >
      <img 
        src={triangle_down} 
        alt='Image Not Available'
        className='TriangleImg'
        style={styles.TriangleImg}
        />
    </div>
  )
}


