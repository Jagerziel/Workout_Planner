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
            <div className='WorkoutItem-sets-container'>
                <div className='WorkoutItem-sets-title'>Sets:</div>
                <div className='WorkoutItem-sets-content'>{exerciseDataItem.sets}</div>
            </div>
            <div className='WorkoutItem-reps-container'>
                <div className='WorkoutItem-reps-title'>{`${exerciseDataItem.rep_type === 'reps' ? 'Reps:' : 'Time:'}`}</div>
                <div className='WorkoutItem-reps-content'>{`${exerciseDataItem.rep_type === 'reps' ? exerciseDataItem.reps : exerciseDataItem.time} ${exerciseDataItem.each ? `each ${exerciseDataItem.each_type}` : ""}`
                
                
                
                }</div>
            </div>




            <div style={{height: '100px'}}></div>
        </div>
    )
}
