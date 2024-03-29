// Import React
import React, { useState, useEffect } from 'react'
// Import Components
import ArrowImg from '../img_components/ArrowImg.jsx'
// Import CSS
import './WorkoutItem.scss'

export default function WorkoutItem( { exerciseDataItem } ) {
    // Handle menu
    const [ menu, setMenu ] = useState({
        none: true,
        desc: false,
        pics: false,
        video: false
    })
    // Track images and current image selected
    const [ imgArr, setImgArr ] = useState({
        currIdx: 0,
        imgArrMaxIdx: exerciseDataItem.img.length - 1
    })
    // Check if note box is extended
    const [ noteBoxExtended, setNoteBoxExtended ] = useState(false)

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

    function handleArrow ( direction ) {
        if ( direction ===  'left') setImgArr({...imgArr, currIdx: imgArr.currIdx - 1})
        if ( direction ===  'right') setImgArr({...imgArr, currIdx: imgArr.currIdx + 1})
    }

    // console.log(noteBoxExtended)

    return (
        <div className='WorkoutItem-container'>
            <div className='WorkoutItem-title-container'>
                <h3 className='WorkoutItem-title'>{`${exerciseDataItem.title}`}</h3>
            </div>
            <div 
                className='WorkoutItem-note-container'
                onClick={()=> setNoteBoxExtended((prev) => !prev)}
                style={{
                    height: noteBoxExtended ? '40px' : '20px',
                }}
            
            >
                <div className='WorkoutItem-note-title'>Note:</div>
                <div 
                    className='WorkoutItem-note-content'
                    style={{
                        textOverflow: noteBoxExtended ? '' : 'ellipsis',
                        overflow: noteBoxExtended ? 'visible' : 'hidden',
                        whiteSpace: noteBoxExtended ? 'break-spaces' : 'nowrap'
                    }}
                >
                    {exerciseDataItem.note === "" ? 'n/a' : exerciseDataItem.note}
                </div>
            </div>
            <div className='WorkoutItem-sets-reps-container'>
                <div className='WorkoutItem-sets-container'>
                    <div className='WorkoutItem-sets-title'>Sets:</div>
                    <div className='WorkoutItem-sets-content'>{exerciseDataItem.sets}</div>
                </div>
                <div className='WorkoutItem-reps-container'>
                    <div className='WorkoutItem-reps-title'>{`${exerciseDataItem.rep_type === 'reps' ? 'Reps:' : 'Time:'}`}</div>
                    <div className='WorkoutItem-reps-content'>{`${exerciseDataItem.rep_type === 'reps' ? exerciseDataItem.reps : exerciseDataItem.time} ${exerciseDataItem.each ? `each ${exerciseDataItem.each_type}` : ""}`}</div>
                </div>
            </div>
            <div className='WorkoutItem-menu-container'>
                {menuItems.map((item, index) => (
                    <div 
                        key={index}
                        className='WorkoutItem-menu-button'
                        onClick={() => handleMenuSelection( item )}
                        style={{
                            border: `2px solid ${menu[item] ? `rgba(200, 200, 200, 0.47)` : 'white'}`,
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
            <div 
                className='WorkoutItem-content-container'
                style={{
                    display: menu.none ? 'none' : 'block',
                    overflow: menu.video || menu.pics ? 'hidden' : 'scroll'
                }}
            >
                {
                    menu.desc ? 
                    <div className='WorkoutItem-content-subcontainer'>
                        <div style={{display: exerciseDataItem.description01 === "" ? "none" : "flex"}}>
                            <div className='WorkoutItem-content-desc-bullet'>-</div>
                            <div className='WorkoutItem-content-desc-content'>{exerciseDataItem.description01}</div>
                        </div> 
                        <div style={{display: exerciseDataItem.description02 === "" ? "none" : "flex"}}>
                            <div className='WorkoutItem-content-desc-bullet'>-</div>
                            <div className='WorkoutItem-content-desc-content'>{exerciseDataItem.description02}</div>
                        </div> 
                        <div style={{display: exerciseDataItem.description03 === "" ? "none" : "flex"}}>
                            <div className='WorkoutItem-content-desc-bullet'>-</div>
                            <div className='WorkoutItem-content-desc-content'>{exerciseDataItem.description03}</div>
                        </div> 
                        <div style={{display: exerciseDataItem.description02 === "" ? "none" : "flex"}}>
                            <div className='WorkoutItem-content-desc-bullet'>-</div>
                            <div className='WorkoutItem-content-desc-content'>{exerciseDataItem.description02}</div>
                        </div> 
                        <div style={{display: exerciseDataItem.description02 === "" ? "none" : "flex"}}>
                            <div className='WorkoutItem-content-desc-bullet'>-</div>
                            <div className='WorkoutItem-content-desc-content'>{exerciseDataItem.description02}</div>
                        </div> 
                    </div>
                    : <div></div> 
                }
                {
                    menu.pics ? 
                    <div className='WorkoutItem-img-container'>
                        {
                            exerciseDataItem.img.length > 0 ?
                            <div className='WorkoutItem-img-subcontainer'>
                                <div className='WorkoutItem-img-display-holder'>
                                    <img 
                                        src={exerciseDataItem.img[imgArr.currIdx]}
                                        className='WorkoutItem-img-item'
                                    />
                                </div>
                                <div 
                                    className='WorkoutItem-img-arrow-left-container'
                                    onClick={() => handleArrow('left')}
                                    style={{display: imgArr.currIdx === 0 ? 'none' : 'block'}}
                                >
                                    <ArrowImg direction={'left'}/>
                                </div>
                                <div 
                                    className='WorkoutItem-img-arrow-right-container'
                                    onClick={() => handleArrow('right')}
                                    style={{display: imgArr.currIdx === imgArr.imgArrMaxIdx ? 'none' : 'block'}}
                                >
                                    <ArrowImg direction={'right'}/>
                                </div>
                            </div> :
                            <div>Pictures Temporarily Unavailable</div>

                        }
                    </div>
                    : <div></div> 
                }
                {
                    menu.video ? 
                    <div className='WorkoutItem-video-container'>
                        {
                            exerciseDataItem.video !== "" ?
                            <iframe width="300" height="" src={exerciseDataItem.video} title="YouTube video player" loading='eager'></iframe> :
                            <div>Video Temporarily Unavailable</div>
                        }
                    </div> 
                    : <div></div> 
                }
            </div>
            <div 
                className='WorkoutItem-type-container'
                style={{
                    marginTop: menu.none ? '10px' : '0px'
                }}
            >
                <div className='WorkoutItem-type-subcontainer'>
                    <div 
                        className='WorkoutItem-type-circle'
                        style={{
                            border: `2px solid white`,
                            backgroundColor: exerciseDataItem.superset ? 'rgb(33, 198, 33)' : '#242424'
                        }}
                    ></div>
                    <div className='WorkoutItem-type-title'>
                        <div style={{color: exerciseDataItem.superset ? 'rgb(33, 198, 33)' : 'white'}}>Superset</div>
                    </div>
                    <div style={{paddingLeft: '15px'}}></div>
                    <div 
                        className='WorkoutItem-type-circle'
                        style={{
                            border: `2px solid white`,
                            backgroundColor: exerciseDataItem.circuit ? 'rgb(255, 0, 0)' : '#242424'
                        }}
                    ></div>
                    <div className='WorkoutItem-type-title'>
                        <div style={{color: exerciseDataItem.circuit ? 'rgb(255, 0, 0)' : 'white' }}>Circuit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


/*
IFRAME ORIGINAL SUGGESTED EDITED CODE - TRIMMED BUT NOT FULLY TESTED FOR ERRORS

<iframe width="300" height="" src={exerciseDataItem.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
*/