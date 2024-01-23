// Import React
import React from 'react'
// Import CSS
import './WorkoutShellItem.scss'

export default function WorkoutShellItem( { exerciseDataItem } ) {
  return (
    <div className='WorkoutShellItem-container'>
        {`${exerciseDataItem.title}`}
    </div>
  )
}
