import React from 'react'
import './Navbar.scss'
import Home from './images/home.png'


export default function Navbar() {

    return (
        <>
            <div className='NavBar-Container'>
                <div 
                    className='NavBar-home-button'
                    onClick={() => console.log('Home Button Clicked')}
                >

                </div>
                <div className='NavBar-Title'>Workout Planner</div>

            </div>
        </>
    )
}
