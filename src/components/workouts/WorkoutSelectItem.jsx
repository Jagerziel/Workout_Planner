// Import React
import React, { useState } from 'react'
// Import CSS
import './WorkoutSelectItem.scss'

export default function WorkoutSelectItem( { exerciseDataItem } ) {
    const [ workoutAdded, setWorkoutAdded ] = useState(false)
    
    function handleAdd () {
        setWorkoutAdded(prev => !prev)

    }

    return (
        <div 
            className='WorkoutSelectItem-container'
            style={{
                border: workoutAdded ? '2px solid rgb(31,120,50)' : '2px solid white',
                backgroundColor: workoutAdded ? '#2e492f' : '#242424',
            }}
        
        >
            <div 
                className='WorkoutSelectItem-title'
            >
                {`${exerciseDataItem.title}`}
            </div>
            <div className='WorkoutSelectItem-details-container'>
                <div className='WorkoutSelectItem-details WorkoutSelectItem-sets'>
                    {`Sets: ${exerciseDataItem.sets}`}
                </div>
                <div 
                    className='WorkoutSelectItem-details WorkoutSelectItem-reps'
                >
                    {`${exerciseDataItem.rep_type === "reps" ? `Reps: ${exerciseDataItem.reps}` : `Time: ${exerciseDataItem.time}`}${exerciseDataItem.each ? ` each ${exerciseDataItem.each_type}` : ""}`}
                </div>
                <div 
                    className='WorkoutSelectItem-button-container'
                    onClick={() => handleAdd()}
                    style={{
                        // border: `2px solid ${workoutAdded ? '#FF0000' : 'white'}`,
                        // backgroundColor: `${workoutAdded ? 'rgba(105, 0, 0, 1)' : '#242424'}`
                    }}
                >
                    <div className='WorkoutSelectItem-button'>
                        {`${workoutAdded ? '-' : '+'}`}
                    </div>
                </div>
            </div>
        </div>
    )
}
