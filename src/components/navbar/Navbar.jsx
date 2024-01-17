import React from 'react'
import './Navbar.scss'
import HomeImg from './images/home.png'
import { useNavigate } from 'react-router'

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className='NavBar-Container'>
                <div 
                    className='NavBar-home-button-container'
                    onClick={() => navigate('/')}
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
