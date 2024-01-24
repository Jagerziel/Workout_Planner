import React, { useState } from 'react'
import './WorkoutItem.scss'

export default function WorkoutItem( { exerciseDataItem } ) {

    const [ menu, setMenu ] = useState({
        none: true,
        desc: false,
        pics: false,
        video: false
    })

    const menuItems = ['desc', 'pics', 'video']
    const menuItemNames = ['Description', 'Images', 'Video']

    function handleMenuSelection ( item ) {
        setMenu({
            none: !menu[item] ? false : true,
            desc: item === 'desc' ? !menu[item] : false,
            pics: item === 'pics' ? !menu[item] : false,
            video: item === 'video' ? !menu[item] : false,
        })
    }

    function handleContentSelected ( item ) {
        return (
            <div>{item}</div>
        )
    }
    
    console.log(menu)

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
                <div className='WorkoutItem-reps-content'>{`${exerciseDataItem.rep_type === 'reps' ? exerciseDataItem.reps : exerciseDataItem.time} ${exerciseDataItem.each ? `each ${exerciseDataItem.each_type}` : ""}`}</div>
            </div>
            <div className='WorkoutItem-menu-container'>
                {menuItems.map((item, index) => (
                    <div 
                        key={index}
                        className='WorkoutItem-menu-button'
                        onClick={() => handleMenuSelection( item )}
                        style={{
                            border: `2px solid ${menu[item] ? `rgba(200, 200, 200, 0.47)` : '2px solid white'}`,
                            backgroundColor: menu[item] ? `rgba(255, 255, 255, 0.87)` : '#242424'
                        }}
                    >
                        <div 
                            className='WorkoutItem-menu-button-text'
                            style={{color: menu[item] ? '#242424' : 'white'}}
                        >
                            {menuItemNames[index]}
                        </div>
                    </div>
                ))}
            </div>
            <div className='WorkoutItem-content-container'>

            </div>




            <div style={{height: '40px'}}></div>
        </div>
    )
}
