// Import React
import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// Import CSS
import './HomeItem.scss'



export default function HomeItem( { data } ) {
  const navigate = useNavigate();
  
  return (
    <div 
      className='HomeItem-container'
      onClick={() => navigate(`${data.navigation}`)}
      >
        <div className='HomeItem-title'>
          {data.title}
        </div>
      </div>
  )
}
