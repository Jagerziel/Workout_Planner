import React from 'react'
import './HomeItem.scss'

export default function HomeItem( { data } ) {
  console.log(data)
  return (
    <div className='HomeItem-container'>{data.title}</div>
  )
}
