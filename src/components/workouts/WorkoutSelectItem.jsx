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
                <div className='WorkoutSelectItem-details'>
                    {`sets`}
                </div>
                <div 
                    className='WorkoutSelectItem-details'
                >
                    {`reps`}
                </div>
                <div className='WorkoutSelectItem-button'>
                    {`button`}
                </div>
            </div>
        </div>
    )
}
