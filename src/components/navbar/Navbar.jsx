import React from 'react'
import './Navbar.scss'
import HomeImg from './images/home.png'

export default function Navbar() {

    return (
        <>
            <div className='NavBar-Container'>
                <div 
                    className='NavBar-home-button-container'
                    onClick={() => console.log('Home Button Clicked')}
                >
                    <img 
                        src={HomeImg}
                        alt="Project Img" 
                        className='HomeImg'
                        loading="lazy" 
                    /> 
                </div>
                <div className='NavBar-Title'>Workout Planner</div>

            </div>
        </>
    )
}
