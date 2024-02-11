// Import React
import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// Import CSS
import './CustomBrowse.scss'
// Import Components
import WorkoutSelectItem from '../../components/workouts/WorkoutSelectItem.jsx';
// Import Framer Motion
import PageTransitionFade from '../../hooks/framer-motion/PageTransitionFade.jsx';
// Import Redux
import { useSelector, useDispatch } from "react-redux";

export default function CustomBrowse() {
    // Redux: Workout Data
    const [selectedExercises, exerciseData] = useSelector((state) => state.customExerciseData.data)
    
    // Navigation 
    const navigate = useNavigate();

    const [ menu, setMenu ] = useState([
        {
          title: 'All',
          tag: 'all',
          selected: true,
        },
        {
          title: 'Warmup',
          tag: 'warmup',
          selected: false,
        },
        {
          title: 'Upper Body',
          tag: 'upper',
          selected: false,
        },
        {
          title: 'Lower Body',
          tag: 'lower',
          selected: false,
        },
        {
          title: 'Core',
          tag: 'core',
          selected: false,
        },
        {
          title: 'Agility',
          tag: 'agility',
          selected: false,
        },
        {
          title: 'Stretch',
          tag: 'stretch',
          selected: false,
        },
        {
          title: 'Cardio',
          tag: 'cardio',
          selected: false,
        }
    ])

    const [ menuLastIdx, setMenuLastIdx ] = useState(0)

    const [ filteredExerciseData, setFilteredExerciseData ] = useState(exerciseData)

    function handleMenuSelection ( menuData, idx ) {
        // Returns if button is clicked when already selected
        if (idx === menuLastIdx) return
        // Maps through menu to replace the last index object (selected: false) and the newly selected object (selected: true) so the selection is updated and only one item can be selected at a time
        const updatedMenu = menu.map((obj, index) => {
            if (index === menuLastIdx) {
                return (
                {
                    "title": menu[menuLastIdx].title,
                    "tag": menu[menuLastIdx].tag,
                    "selected": false
                }
                )
            } else if (idx !== index) {
                return obj
            } else {
                return (
                {
                    "title": menuData.title,
                    "tag": menuData.tag,
                    "selected": true
                }
                )
            }
        })
        // Set new last index
        setMenuLastIdx(idx)
        // Set the menu to the updated menu
        setMenu(updatedMenu)
        // Filter exercises
        filterExercises(exerciseData, menuData.tag)
    }

    function filterExercises ( exercises, tag ) {
        let filteredData = []
        
        if ( tag === 'all' ) {
            filteredData = exercises
        } else {
            filteredData = exercises.filter((data) => {
                if (data.type === tag) return data
            })
        }
        setFilteredExerciseData(filteredData)
    }

    function handleBack () {
        navigate('/custom')
    }

    function handleConfirm () {
        navigate('order')
    }

    // console.log(selectedExercises)

    return (
        <PageTransitionFade>
            <div className='CustomBrowse-container'>
                <div className='CustomBrowse-title'>
                    {`Selected Exercises: ${selectedExercises.length}`}
                </div>
                <div className='CustomBrowse-menu-container'>
                    <div className='CustomBrowse-menu-subcontainer'>
                        {
                            menu.map((menuData, index) => 
                                <div 
                                className='CustomBrowse-menu-item-container'
                                key={index}
                                onClick={() => handleMenuSelection(menuData, index)}
                                style={{
                                    border: `3px solid ${menuData.selected ? '#242424' : '#cacaca91'}`,
                                    backgroundColor: menuData.selected ? 'rgba(255, 255, 255, 0.87)' : '#242424',
                                    color: menuData.selected ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'
                                }}
                                >
                                <div className='CustomBrowse-menu-item-title'>{menuData.title}</div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='CustomBrowse-exercise-container'>
                    <div 
                        className='CustomBrowse-exercise-subcontainer'
                        key={Math.random()}
                        style={{
                            animation: "inAnimation 500ms ease-in" 
                        }}
                    >
                        {
                            filteredExerciseData.map((exerciseDataItem, index) => 
                                <div key={index}>
                                    <WorkoutSelectItem 
                                        exerciseDataItem={exerciseDataItem} 
                                        showSelect={true}    
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='CustomBrowse-bottom-container'>
                    <div 
                        className='CustomBrowse-bottom-button'
                        onClick={handleBack}
                    >
                        Back
                    </div>
                    <div 
                        className='CustomBrowse-bottom-button'
                        onClick={handleConfirm}
                    >
                        Confirm
                    </div>
                </div>
            </div>
        </PageTransitionFade>
    )
}
