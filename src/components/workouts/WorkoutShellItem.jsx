// Import React
import React, { useState } from 'react'
// Import Components
import WorkoutItem from './WorkoutItem'

// Import CSS
import './WorkoutShellItem.scss'

export default function WorkoutShellItem( { exerciseDataItem } ) {
    const [ completed, setCompleted ] = useState(false)


    return (
        <div 
            className='WorkoutShellItem-container'
            style={{
                border: completed ? '2px solid green' : '2px solid white',
                backgroundColor: completed ? '#2e492f' : '',
            }}
        >
            <WorkoutItem exerciseDataItem={ exerciseDataItem }/>
            <div
                className='WorkoutShellItem-completed-btn'
                style={{
                    backgroundColor: completed ? '#242424' : '#242424',
                }}
                onClick={() => setCompleted(prev => !prev)}
            >
                {completed ? 'Y' : 'N'}
            </div>
        </div>
    )
}
