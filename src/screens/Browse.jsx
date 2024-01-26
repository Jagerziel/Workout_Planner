// Import React
import React, {useEffect, useState} from 'react'
// Import CSS
import './Browse.scss'

export default function Browse() {
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

  function handleMenuSelection ( tag ) {
    console.log(tag)
  }

  return (
    <div className='Browse-container'>
      <div className='Browse-menu-container'>
        <div className='Browse-menu-subcontainer'>
          {
            menu.map((menuData, index) => 
              <div 
                className='Browse-menu-item-container'
                onClick={() => handleMenuSelection(menuData.tag)}
              >
                <div className='Browse-menu-item-title'>{menuData.title}</div>
              </div>
            )
          }
        </div>
      </div>
      {/* <div className='Browse-workout-container'>
        PLACEHOLDER FOR WORKOUTS
      </div> */}
    </div>
  )
}
