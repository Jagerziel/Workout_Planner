// Import React
import React, { useState } from 'react'
// Import CSS
import './WorkoutSelectItem.scss'

export default function WorkoutSelectItem( { exerciseDataItem } ) {
    const [ titleExpanded, setTitleExpanded ] = useState(false)
    
    function handleExpandTitle () {
        console.log('title clicked')
    }


    function handleAdd () {

    }

    return (
        <div className='WorkoutSelectItem-container'>
            <div 
                className='WorkoutSelectItem-title'
                onClick={handleExpandTitle}
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
                <div className='WorkoutSelectItem-button'>
                    {`+`}
                </div>
            </div>
        </div>
    )
}
