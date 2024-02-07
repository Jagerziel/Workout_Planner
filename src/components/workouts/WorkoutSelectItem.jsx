// Import React
import React, { useState } from 'react'
// Import CSS
import './WorkoutSelectItem.scss'
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { updateCustomExerciseData } from '../../redux/reducers/customExerciseDataReducer.js';

export default function WorkoutSelectItem( { exerciseDataItem } ) {
    // Redux: Workout Data
    const [selectedExercises, exerciseData] = useSelector((state) => state.customExerciseData.data)
    // React Redux
    const dispatch = useDispatch()
    
    const [ workoutAdded, setWorkoutAdded ] = useState(false)

    let selected = exerciseData[exerciseDataItem.id].selected
    
    function handleAdd () {
        setWorkoutAdded(prev => !prev)
        let newExerciseDataItem = {...exerciseDataItem, selected: !exerciseData[exerciseDataItem.id].selected}
        let exerciseDataShallowCopy = [...exerciseData]
        let selectedExercisesShallowCopy = [...selectedExercises]

        if (!workoutAdded) {
            exerciseDataShallowCopy[exerciseDataItem.id] = newExerciseDataItem
            selectedExercisesShallowCopy.push(exerciseDataItem.id)
            dispatch(updateCustomExerciseData([selectedExercisesShallowCopy, exerciseDataShallowCopy]))

            console.log([selectedExercisesShallowCopy, exerciseDataShallowCopy])
        }
        else {
            exerciseDataShallowCopy[exerciseDataItem.id] = newExerciseDataItem
            let adjustedArray = []
            for (let i = 0; i < selectedExercisesShallowCopy.length; i++) {
                if (selectedExercisesShallowCopy[i] !== exerciseDataItem.id) {
                    adjustedArray.push(selectedExercisesShallowCopy[i])
                }
            }
            dispatch(updateCustomExerciseData([adjustedArray, exerciseDataShallowCopy]))

            console.log([adjustedArray, exerciseDataShallowCopy])
        }
    }
    
    return (
        <div 
            className='WorkoutSelectItem-container'
            style={{
                border: selected ? '2px solid rgb(31,120,50)' : '2px solid white',
                backgroundColor: selected ? '#2e492f' : '#242424',
            }}
        
        >
            <div 
                className='WorkoutSelectItem-title'
            >
                {`${exerciseDataItem.title}`}
            </div>
            <div className='WorkoutSelectItem-details-container'>
                <div className='WorkoutSelectItem-details WorkoutSelectItem-sets'>
                    {`Sets: ${exerciseDataItem.sets}`}
                </div>
                <div 
                    className='WorkoutSelectItem-details WorkoutSelectItem-reps'
                >
                    {`${exerciseDataItem.rep_type === "reps" ? `Reps: ${exerciseDataItem.reps}` : `Time: ${exerciseDataItem.time}`}${exerciseDataItem.each ? ` each ${exerciseDataItem.each_type}` : ""}`}
                </div>
                <div 
                    className='WorkoutSelectItem-button-container'
                    onClick={() => handleAdd()}
                >
                    <div className='WorkoutSelectItem-button'>
                        {`${selected ? '-' : '+'}`}
                    </div>
                </div>
            </div>
        </div>
    )
}
