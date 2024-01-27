// Import React
import React, { useState } from 'react'
// Import Components
import WorkoutItem from './WorkoutItem'
// Import Icons
import flagempty from '/public/flag-empty.png'
import flagfull from '/public/flag-full.png'
// Import CSS
import './WorkoutShellItemFlag.scss'

export default function WorkoutShellItemFlag( { exerciseDataItem } ) {
    const [ completed, setCompleted ] = useState(false)


    return (
        <div 
            className='WorkoutShellItemFlag-container'
            style={{
                border: completed ? '2px solid rgba(246, 249, 53, 0.641)' : '2px solid white',
                backgroundColor: completed ? 'rgba(246, 249, 53, 0.365)' : '',
            }}
        >
            <WorkoutItem exerciseDataItem={ exerciseDataItem }/>
            <div
                className='WorkoutShellItemFlag-completed-btn'
                style={{
                    backgroundColor: completed ? '#242424' : '#242424',
                    border: `2px solid ${completed ? 'rgba(246, 249, 53, 0.641)' : 'rgb(255,255,255)'}`
                }}
                onClick={() => setCompleted(prev => !prev)}
            >
                {completed ? 
                <img 
                    src={flagfull} 
                    alt="Y"
                    style={{
                        height: '22px',
                        aspectRatio: "1/1",
                        filter: "invert(78%) sepia(85%) saturate(385%) hue-rotate(7deg) brightness(103%) contrast(105%)",
                        margin: 0,
                    }}
                /> 
                : 
                <img 
                    src={flagempty} 
                    alt="N"
                    style={{
                        height: '21.5px',
                        aspectRatio: "1/1",
                        filter: "invert(100%) sepia(100%) saturate(2%) hue-rotate(202deg) brightness(107%) contrast(101%)",
                        margin: 0,
                    }}
                /> 
                }
            </div>
        </div>
    )
}
