// Import React
import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// Import CSS
import './CustomOrder.scss'
// Import Components
import WorkoutSelectItem from '../../components/workouts/WorkoutSelectItem.jsx';
// Import Redux
import { useSelector, useDispatch } from "react-redux";

export default function CustomOrder() {
    // Redux: Workout Data
    const [selectedExercises, exerciseData] = useSelector((state) => state.customExerciseData.data)

    // Navigation 
    const navigate = useNavigate();

    function handleBack () {
        navigate('/custom/browse')
    }

    function handleConfirm () {
        navigate('/custom')
        console.log('navigation to browse button clicked')
    }

    return (
        <div className='CustomOrder-container'>
            <div className='CustomOrder-title'>
                Order Workouts
            </div>
            <div className='CustomOrder-subtitle'>
                (Drag & Drop)
            </div>
            <div className='CustomOrder-exercise-container'>
                <div className='CustomOrder-exercise-subcontainer'>
                    {
                        selectedExercises.map((selectedIdx, index) => 
                            <div key={index}>
                                <WorkoutSelectItem exerciseDataItem={exerciseData[selectedIdx]} showSelect={false}/>
                                <div
                                    style={{
                                        marginTop: selectedIdx === selectedExercises[selectedExercises.length - 1] ? '0' : '10px'
                                    }}
                                ></div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='CustomOrder-bottom-container'>
                <div 
                    className='CustomOrder-bottom-button'
                    onClick={handleBack}
                >
                    Back
                </div>
                <div 
                    className='CustomOrder-bottom-button'
                    onClick={handleConfirm}
                >
                    Confirm
                </div>
            </div>
        </div>
    )
}