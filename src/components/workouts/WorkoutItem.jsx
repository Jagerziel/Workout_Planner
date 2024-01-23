import React, { useState } from 'react'
import './WorkoutItem.scss'

export default function WorkoutItem( { exerciseDataItem } ) {




    return (
        <div className='WorkoutItem-container'>
            <div className='WorkoutItem-title-container'>
                <h3 className='WorkoutItem-title'>{`${exerciseDataItem.title}`}</h3>
            </div>
            <div style={{height: '100px'}}>

            </div>
        </div>
    )
}
