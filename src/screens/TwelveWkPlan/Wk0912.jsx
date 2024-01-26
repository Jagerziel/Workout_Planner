// Import React
import React, { useState } from 'react'
// Import Components
import RestItem from '../../components/workouts/RestItem.jsx'
import WorkoutShellItem from '../../components/workouts/WorkoutShellItem.jsx'

// Import CSS
import './Wk0116.scss'

// Import State Management
import { useSelector, useDispatch } from "react-redux";

export default function Wk0912() {

    const exerciseData = useSelector((state) => state.exerciseData.data)

    const [ workoutIdx, setWorkoutIdx ] = useState([
        {
            title: "Day 1",
            workouts: [0,2,4,7,8,11,12,13,14,15,16],
            rest: false,
            show: true,
        },
        {
            title: "Day 2",
            workouts: [18,20,22,24,27,28,30,31,32,33],
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
            workouts: [34,35,36,38,40,42,43,44,45,46],
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
            workouts: [0,48,50,52,54,56,58,59],
            rest: false,
            show: false,
        },
        {
            title: "Day 7",
            workouts: [61,63,65,67,69,71,73,31,32,33],
            rest: false,
            show: false,
        },
    ])

    return (
        <div className='Wk0116-container'>
            <div className='Wk0116-title'>Weeks 9 - 12</div>
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
                                style={{display: data.show ? "flex" : "none"}}
                            >
                                <RestItem /> 
                            </div> :
                            <div 
                                className='Wk0116-workout-item-container'
                                style={{display: data.show ? "grid" : "none"}}
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
    )
}
