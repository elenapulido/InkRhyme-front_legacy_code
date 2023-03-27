import React, { useState } from 'react'
import './Card.css'



const Card = (props) => {
  let [toggle, setToggle] = useState("")

  const like = () => {
   toggle === "heart-active" ? setToggle("") : setToggle("heart-active")
  }
  return (
    
    <div >
      <div className='cardContainer'>
        <div className='cardImage'>
            <img  src={props.url} alt='' />
            <span id='heart' className={toggle} onClick={like}/>
        </div>
        <h3 className='cardText'>{props.title}</h3>
      </div>      
    </div>
     
  )
}

export default Card