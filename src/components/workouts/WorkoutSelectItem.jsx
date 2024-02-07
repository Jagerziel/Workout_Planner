// Import React
import React, { useState } from 'react'
// Import CSS
import './WorkoutSelectItem.scss'
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { updateCustomExerciseData } from '../../redux/reducers/customExerciseDataReducer.js';

export default function WorkoutSelectItem( { exerciseDataItem, showSelect } ) {
    // Redux: Workout Data
    const [selectedExercises, exerciseData] = useSelector((state) => state.customExerciseData.data)
    // React Redux
    const dispatch = useDispatch()
    
    const [ workoutAdded, setWorkoutAdded ] = useState(false)

    let selected = exerciseData[exerciseDataItem.id].selected
    
    function handleAdd () {
        setWorkoutAdded(prev => !prev)
        let exerciseDataShallowCopy = [...exerciseData]
        let selectedExercisesShallowCopy = [...selectedExercises]
        
        if (!selected) { // If not previously selected (i.e. added), add workout 
            let newExerciseDataItem = {...exerciseDataItem, selected: true}
            exerciseDataShallowCopy[exerciseDataItem.id] = newExerciseDataItem
            selectedExercisesShallowCopy.push(exerciseDataItem.id)
            /* TEST OUTPUT */
            // console.log([selectedExercisesShallowCopy, exerciseDataShallowCopy])
            // console.log(selectedExercises)
        }
        else { // Otherwise, remove workout from selected list 
            let newExerciseDataItem = {...exerciseDataItem, selected: false}
            exerciseDataShallowCopy[exerciseDataItem.id] = newExerciseDataItem
            let adjustedArray = []
            for (let i = 0; i < selectedExercisesShallowCopy.length; i++) {
                if (selectedExercisesShallowCopy[i] !== exerciseDataItem.id) {
                    adjustedArray.push(selectedExercisesShallowCopy[i])
                }
            }
            selectedExercisesShallowCopy = adjustedArray
            /* TEST OUTPUT */
            // console.log([adjustedArray, exerciseDataShallowCopy])
            // console.log(selectedExercises)
        }
        dispatch(updateCustomExerciseData([selectedExercisesShallowCopy, exerciseDataShallowCopy]))
    }
    // console.log(selectedExercises)


    return (
        <div 
            className='WorkoutSelectItem-container'
            style={{
                border: selected && showSelect ? '2px solid rgb(31,120,50)' : '2px solid white',
                backgroundColor: selected && showSelect ? '#2e492f' : '#242424',
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
                {
                    showSelect ? 
                    <div 
                        className='WorkoutSelectItem-button-container'
                        onClick={() => handleAdd()}
                    >
                        <div className='WorkoutSelectItem-button'>
                            {`${selected ? '-' : '+'}`}
                        </div>
                    </div> :
                    <div className='WorkoutSelectItem-button-placeholder'></div>
                }
            </div>
        </div>
    )
}
