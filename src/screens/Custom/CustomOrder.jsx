// Import React
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// Import CSS
import './CustomOrder.scss'
// Import Components
import WorkoutSelectItem from '../../components/workouts/WorkoutSelectItem.jsx';
import TriangleImg from '../../components/img_components/TriangleImg.jsx'
// Import Framer Motion
import PageTransitionFade from '../../hooks/framer-motion/PageTransitionFade.jsx';
// Import Functions
import { isMobile } from '../../data/functions.js';
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { updateCustomExerciseData } from '../../redux/reducers/customExerciseDataReducer.js';

export default function CustomOrder() {
    // Redux: Workout Data
    const [selectedExercises, exerciseData] = useSelector((state) => state.customExerciseData.data)
    const dispatch = useDispatch()

    const [ isMobileDevice, setIsMobileDevice ] = useState(false)

    const [ sortedList, setSortedList ] = useState(selectedExercises)

    // For Desktop Devices
    const dragExercise = useRef(0)
    const draggedOverExercise = useRef(0)

    // For Mobile Devices
    const [ itemSelected, setItemSelected ] = useState(0)

    // Navigation 
    const navigate = useNavigate();

    function handleSortDesktop () {
        let sortedListClone = [...sortedList] // Clone Sorted List (selected exercises)
        let dragExerciseIdx = dragExercise.current // Store current drag exercise idx
        let draggedOverExerciseIdx = draggedOverExercise.current // Store dragover exercise idx
        
        // Scenario 1: If dragExercise Idx is greater than draggedOverIdx
        if ( dragExerciseIdx > draggedOverExerciseIdx) {
            let section01 = sortedListClone.slice(0, draggedOverExerciseIdx) // 0 to dragOverIndex
            let section02 = sortedListClone[dragExerciseIdx] // insert dragged item
            let section03 = sortedListClone.slice(draggedOverExerciseIdx, dragExerciseIdx) // dragOverIndex to dragged item
            let section04 = sortedListClone.slice(dragExerciseIdx + 1) // skip dragged item (as it was inserted above) and return remainder of array
            sortedListClone = [...section01, section02, ...section03, ...section04]
        }
        
        // Scenario 2: If dragExercise Idx is less than draggedOverIdx
        if ( dragExerciseIdx < draggedOverExerciseIdx) {
            let section01 = sortedListClone.slice(0, dragExerciseIdx) // 0 to dragged item
            let section02 = sortedListClone.slice(dragExerciseIdx + 1, draggedOverExerciseIdx + 1) // skip dragged item and continue thru dragged over item
            let section03 = sortedListClone[dragExerciseIdx] // insert dragged item
            let section04 = sortedListClone.slice(draggedOverExerciseIdx + 1) // continue from item after draggedOver item and return remainder of array
            sortedListClone = [...section01, ...section02, section03, ...section04]
        }
        // Store resorted list 
        setSortedList(sortedListClone)
        // Store update in redux
        dispatch(updateCustomExerciseData([sortedListClone, exerciseData]))
    }
    
    function handleSortMobile ( direction, index ) {
        let sortedListClone = [...sortedList] // Clone Sorted List (selected exercises)
        let temp = sortedListClone[index] // temporarily hold value at index position
        if ( direction === "up" ) { // Swap current item with item above
            sortedListClone[index] = sortedListClone[index - 1]
            sortedListClone[index - 1] = temp
            setItemSelected(index - 1)
        }
        if ( direction === "down") { // Swap current item with item below
            sortedListClone[index] = sortedListClone[index + 1]
            sortedListClone[index + 1] = temp
            setItemSelected(index + 1)
        }
        // Store resorted list 
        setSortedList(sortedListClone)
        // Store update in redux
        dispatch(updateCustomExerciseData([sortedListClone, exerciseData]))
    }

    function handleBack () {
        navigate('/custom/browse')
    }

    function handleConfirm () {
        navigate('/custom')
    }

    useEffect(() => {
        setIsMobileDevice(isMobile())
    }, [])

    return (
        <PageTransitionFade>
            <div className='CustomOrder-container'>
                <div className='CustomOrder-title'>
                    Order Workouts
                </div>
                <div className='CustomOrder-subtitle'>
                    {isMobile ? `(Select & Sort)` : `(Drag & Drop)`}
                </div>
                <div className='CustomOrder-exercise-container'>
                    <div className='CustomOrder-exercise-subcontainer'>
                        {
                            sortedList.map((selectedIdx, index) => 
                                <div 
                                    key={index}
                                    className='CustomOrder-exercise-item-container'
                                >
                                    {
                                        isMobileDevice ? 
                                        <div
                                            className='CustomOrder-exercise-item-subcontainer-mobile'
                                        >
                                            <div
                                                onClick={(() => setItemSelected(index))}
                                            >
                                                <WorkoutSelectItem exerciseDataItem={exerciseData[selectedIdx]} showSelect={false} order={index}/>
                                            </div>
                                            <div 
                                                className='CustomOrder-exercise-item-triangle-container'
                                                style={{
                                                    display: itemSelected === index ? 'flex' : 'none'
                                                }}
                                            >
                                                <div 
                                                    className='CustomOrder-exercise-item-triangle'
                                                    onClick={() => handleSortMobile("up", index)}
                                                >
                                                    {
                                                        index !== 0 ? 
                                                        <TriangleImg direction={"up"}/>
                                                        : <div></div>
                                                    }
                                                </div>
                                                <div 
                                                    className='CustomOrder-exercise-item-triangle'
                                                    onClick={() => handleSortMobile("down", index)}
                                                >
                                                    {
                                                        index !== sortedList.length - 1 ?
                                                        <TriangleImg direction={"down"} />
                                                        : <div></div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        :
                                        <div
                                            className='CustomOrder-exercise-item-subcontainer'
                                            draggable
                                            onDragStart={() => dragExercise.current = index}
                                            onDragEnter={() => draggedOverExercise.current = index}
                                            onDragEnd={handleSortDesktop}
                                            onDragOver={(e) => e.preventDefault()}         
                                        >
                                            <WorkoutSelectItem exerciseDataItem={exerciseData[selectedIdx]} showSelect={false} order={index}/>
                                        </div>
                                    }
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
        </PageTransitionFade>
    )
}