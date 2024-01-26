// Import React
import React, { useState } from 'react'
// Import Components
import WorkoutItem from './WorkoutItem'
// Import Icons
import musclepain from '/public/muscle-pain.png'
import cross from '/public/cross.png'
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
                    border: `2px solid ${completed ? 'green' : 'white'}`
                }}
                onClick={() => setCompleted(prev => !prev)}
            >
                {completed ? 
                <img 
                    src={musclepain} 
                    alt="Y"
                    style={{
                        height: '22px',
                        aspectRatio: "1/1",
                        filter: "brightness(0) saturate(100%) invert(69%) sepia(51%) saturate(5658%) hue-rotate(80deg) brightness(103%) contrast(88%)",
                        margin: 0,
                    }}
                /> 
                : 
                <img 
                    src={cross} 
                    alt="N"
                    style={{
                        height: '21.5px',
                        aspectRatio: "1/1",
                        filter: "brightness(0) saturate(100%) invert(21%) sepia(96%) saturate(6619%) hue-rotate(360deg) brightness(103%) contrast(122%)",
                        margin: 0,
                    }}
                /> 
                }
            </div>
        </div>
    )
}
