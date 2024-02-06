// Import React
import React, { useState } from 'react'
// Import CSS
import './WorkoutSelectItem.scss'

export default function WorkoutSelectItem( { exerciseDataItem } ) {
    const [ titleExpanded, setTitleExpanded ] = useState(false)
    
    function handleExpandTitle () {
        console.log('title clicked')
    }




    return (
        <div className='WorkoutSelectItem-container'>
            <div 
                className='WorkoutSelectItem-title'
                onClick={handleExpandTitle}
            >
                {`${exerciseDataItem.title}`}
            </div>
        </div>
    )
}
