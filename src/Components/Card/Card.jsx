import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Card.css'



const Card = ({id, title, url}) => {
  
  let navigate = useNavigate()


  return (
    
    <div>
      <div className='cardContainer'>
        <div className='cardImage'>
            <img  src={url} alt='' />
        </div>
        <h3 onClick={()=> {navigate("/Article", {state: {id}})}} className='cardText'>{title}</h3>
      </div>      
    </div>
     
  )
}

export default Card