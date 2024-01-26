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

  const [ menuLastIdx, setMenuLastIdx ] = useState(0)

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
  }

  return (
    <div className='Browse-container'>
      <div className='Browse-menu-container'>
        <div className='Browse-menu-subcontainer'>
          {
            menu.map((menuData, index) => 
              <div 
                className='Browse-menu-item-container'
                key={index}
                onClick={() => handleMenuSelection(menuData, index)}
                style={{
                  border: `3px solid ${menuData.selected ? '#242424' : '#cacaca91'}`,
                  backgroundColor: menuData.selected ? 'rgba(255, 255, 255, 0.87)' : '#242424',
                  color: menuData.selected ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'
                }}
              >
                <div className='Browse-menu-item-title'>{menuData.title}</div>
              </div>
            )
          }
        </div>
      </div>
      <div className='Browse-workout-container'>
        PLACEHOLDER FOR WORKOUTS
      </div>
    </div>
  )
}
