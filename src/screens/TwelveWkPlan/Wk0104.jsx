// Import React
import React from 'react'
// Import CSS
import './Wk0116.scss'

export default function Wk0104() {
    const workoutIdx = [
        {
            title: "Day 1",
            workouts: [0,1,3,5,6,9,10,13,14,15,16],
            rest: false,
        },
        {
            title: "Day 2",
            workouts: [17,19,21,23,25,26,29,31,32,33],
            rest: false,
        },
        {
            title: "Day 3",
            workouts: [],
            rest: true,
        },
        {
            title: "Day 4",
            workouts: [34,35,36,37,39,41,43,44,45,46],
            rest: false,
        },
        {
            title: "Day 5",
            workouts: [],
            rest: true,
        },
        {
            title: "Day 6",
            workouts: [0,47,49,51,53,55,57,59],
            rest: false,
        },
        {
            title: "Day 7",
            workouts: [60,62,64,66,68,70,72,31,32,33],
            rest: false,
        },
    ]

    return (
        <div className='Wk0116-container'>
            <div className='Wk0116-title'>Weeks 1 - 4</div>
            
        </div>
    )
}
