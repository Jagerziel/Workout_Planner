// Import React
import React, { useRef, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// Import CSS
import './CustomOrder.scss'
// Import Components
import WorkoutSelectItem from '../../components/workouts/WorkoutSelectItem.jsx';
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { updateCustomExerciseData } from '../../redux/reducers/customExerciseDataReducer.js';

export default function CustomOrder() {
    // Redux: Workout Data
    const [selectedExercises, exerciseData] = useSelector((state) => state.customExerciseData.data)
    const dispatch = useDispatch()

    const [ sortedList, setSortedList ] = useState(selectedExercises)
    const dragExercise = useRef(0)
    const draggedOverExercise = useRef(0)

    // Navigation 
    const navigate = useNavigate();

    function handleSort () {
        let sortedListClone = [...sortedList]
        // const temp = sortedListClone[dragExercise.current]
        // sortedListClone[dragExercise.current] = sortedListClone[draggedOverExercise.current]
        // sortedListClone[draggedOverExercise.current] = temp
        
        let dragExerciseIdx = dragExercise.current
        let draggedOverExerciseIdx = draggedOverExercise.current
        const listLen = sortedListClone.length
        
        if ( dragExerciseIdx > draggedOverExerciseIdx) {
            let section01 = sortedListClone.slice(0, draggedOverExerciseIdx) // 0 to dragOverIndex
            let section02 = sortedListClone[dragExerciseIdx] // insert dragged item
            let section03 = sortedListClone.slice(draggedOverExerciseIdx, dragExerciseIdx) // dragOverIndex to dragged item
            let section04 = sortedListClone.slice(dragExerciseIdx + 1) // skip dragged item (as it was inserted above) and return remainder of array
            sortedListClone = [...section01, section02, ...section03, ...section04]
        }
        
        if ( dragExerciseIdx < draggedOverExerciseIdx) {
            let section01 = sortedListClone.slice(0, dragExerciseIdx) // 0 to dragged item
            let section02 = sortedListClone.slice(dragExerciseIdx + 1, draggedOverExerciseIdx + 1) // skip dragged item and continue thru dragged over item
            let section03 = sortedListClone[dragExerciseIdx] // insert dragged item
            let section04 = sortedListClone.slice(draggedOverExerciseIdx + 1) // continue from item after draggedOver item and return remainder of array
            sortedListClone = [...section01, ...section02, section03, ...section04]
        }
        setSortedList(sortedListClone)
        dispatch(updateCustomExerciseData([sortedListClone, exerciseData]))
    }
    

    function handleBack () {
        navigate('/custom/browse')
    }

    function handleConfirm () {
        navigate('/custom')
        console.log('navigation to browse button clicked')
    }

    // console.log(dragExercise, draggedOverExercise)

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
                        sortedList.map((selectedIdx, index) => 
                            <div 
                                key={index}
                                className='CustomOrder-exercise-item-container'
                            >
                                <div
                                    className='CustomOrder-exercise-item-subcontainer'
                                    draggable
                                    onDragStart={() => dragExercise.current = index}
                                    onDragEnter={() => draggedOverExercise.current = index}
                                    onDragEnd={handleSort}
                                    onDragOver={(e) => e.preventDefault()}
                                >
                                    <WorkoutSelectItem exerciseDataItem={exerciseData[selectedIdx]} showSelect={false} order={index}/>
                                </div>
                                <div
                                    style={{
                                        marginTop: selectedIdx === sortedList[sortedList.length - 1] ? '0' : '10px'
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