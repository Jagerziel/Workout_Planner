// Import React
import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// Import CSS
import './NavItem.scss'



export default function NavItem( { data } ) {
  const navigate = useNavigate();
  
  return (
    <div 
      className='NavItem-container'
      onClick={() => navigate(`${data.navigation}`)}
      >
        <div className='NavItem-title'>
          {data.title}
        </div>
      </div>
  )
}
