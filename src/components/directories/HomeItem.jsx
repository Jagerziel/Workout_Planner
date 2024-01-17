import React from 'react'
import './HomeItem.scss'

export default function HomeItem( { data } ) {
  console.log(data)
  return (
    <div 
      className='HomeItem-container'
      onClick={() => console.log(`${data.navigation} button clicked`)}
      >
        <div className='HomeItem-title'>
          {data.title}
        </div>
      </div>
  )
}
