import React from 'react'
import './Home.scss'
// State Management
import { useSelector, useDispatch } from "react-redux";

export default function Home() {

  const homeDirectoryData = useSelector((state) => state.homeDirectory.data)


  // console.log(homeDirectoryData)
  return (
    <>
      <div>Home</div>
      
    </>
    

  )
}
