import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Card.css'



const Card = ({id, title, url}) => {
  let [toggle, setToggle] = useState("")
  let navigate = useNavigate()


  const like = () => {
   toggle === "heart-active" ? setToggle("") : setToggle("heart-active")
  }
  return (
    
    <div>
      <div className='cardContainer'>
        <div className='cardImage'>
            <img  src={url} alt='' />
            <span id='heart' className={toggle} onClick={like}/>
        </div>
        <h3 onClick={()=> {navigate("/Article", {state: {id}})}} className='cardText'>{title}</h3>
      </div>      
    </div>
     
  )
}

export default Card