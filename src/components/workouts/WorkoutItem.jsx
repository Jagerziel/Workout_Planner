import React, { useState } from 'react'
import './WorkoutItem.scss'

export default function WorkoutItem( { exerciseDataItem } ) {




    return (
        <div className='WorkoutItem-container'>
            <div className='WorkoutItem-title-container'>
                <h3 className='WorkoutItem-title'>{`${exerciseDataItem.title}`}</h3>
            </div>
            <div className='WorkoutItem-note-container'>
                <div className='WorkoutItem-note-title'>Note:</div>
                <div className='WorkoutItem-note-content'>{exerciseDataItem.note === "" ? 'n/a' : exerciseDataItem.note}</div>
            </div>



            <div style={{height: '100px'}}></div>
        </div>
    )
}
