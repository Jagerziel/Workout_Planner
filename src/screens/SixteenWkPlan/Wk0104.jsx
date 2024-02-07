// Import React
import React, { useState } from 'react'
// Import Components
import RestItem from '../../components/workouts/RestItem.jsx'
import WorkoutShellItem from '../../components/workouts/WorkoutShellItem.jsx'
// Import CSS
import './Wk0116.scss'
// Import Framer Motion
import PageTransitionFade from '../../hooks/framer-motion/PageTransitionFade.jsx'

// Import State Management
import { useSelector, useDispatch } from "react-redux";

export default function Wk0104() {

    const exerciseData = useSelector((state) => state.exerciseData.data)

    const [ workoutIdx, setWorkoutIdx ] = useState([
        {
            title: "Day 1",
            workouts: [0,1,3,5,6,9,10,13,14,15,16],
            rest: false,
            show: false,
        },
        {
            title: "Day 2",
            workouts: [17,19,21,23,25,26,29,31,32,33],
            rest: false,
            show: false,
        },
        {
            title: "Day 3",
            workouts: [],
            rest: true,
            show: false,
        },
        {
            title: "Day 4",
            workouts: [34,35,36,37,39,41,43,44,45,46],
            rest: false,
            show: false,
        },
        {
            title: "Day 5",
            workouts: [],
            rest: true,
            show: false,
        },
        {
            title: "Day 6",
            workouts: [0,47,49,51,53,55,57,59],
            rest: false,
            show: false,
        },
        {
            title: "Day 7",
            workouts: [60,62,64,66,68,70,72,31,32,33],
            rest: false,
            show: false,
        },
    ])

    return (
        <PageTransitionFade>
            <div className='Wk0116-container'>
                <div className='Wk0116-title'>Weeks 1 - 4</div>
                {
                    workoutIdx.map(( data , index ) => (
                        <div 
                            className='Wk0116-workout-container'
                            key={index}
                        >
                            <div 
                                className='Wk0116-workout-day'
                                style={{
                                    margin: data.show ? '0 0 5px 0' : '0 0 15px 0',
                                    border: `3px solid ${data.show ? 'rgba(140, 140, 140, 0.47)' : 'rgba(255, 255, 255, 0.37)'}`,
                                    backgroundColor: data.show ? 'rgba(255, 255, 255, 0.87)' : 'rgba(255, 255, 255, 0.47)'

                                }}
                                onClick={() => {
                                    let shallowData = workoutIdx
                                    shallowData[index].show = !shallowData[index].show
                                    setWorkoutIdx([...shallowData])
                                }} 
                            >
                                {`${data.title} (${data.show ? ' - ' : ' + '})`}
                            </div>
                            {
                                data.rest ? 
                                <div 
                                    className='Wk0116-rest-item-container'
                                    style={{
                                        display: data.show ? "flex" : "none",
                                        animation: data.show ? "inAnimation 250ms ease-in" : "outAnimation 0ms ease-out"
                                    }}
                                >
                                    <RestItem /> 
                                </div> :
                                <div 
                                    className='Wk0116-workout-item-container'
                                    style={{
                                        display: data.show ? "grid" : "none",
                                        animation: data.show ? "inAnimation 250ms ease-in" : "outAnimation 0ms ease-out"
                                    }}
                                >
                                    {
                                        data.workouts.map((workoutsArr, index) => 
                                            <div key={index}> 
                                                <WorkoutShellItem exerciseDataItem={ exerciseData[workoutsArr] }/>
                                            </div>
                                        )
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </PageTransitionFade>
    )
}