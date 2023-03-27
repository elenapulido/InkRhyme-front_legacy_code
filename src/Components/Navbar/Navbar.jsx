import React from 'react'
import "./Navbar.css"
import Plus from '../../Assets/Img/Plus.png'
import Hamburguer from '../../Assets/Img/Hamburguer.png'
const Navbar = () => {
  return (   
      <div className='navigation'>
        <nav>
          <img className='plusNavigation' src={Plus}/>
          <img className='hamburguernavigation' src={Hamburguer}/>
        </nav>      
      </div>    
  );
}

export default Navbar;

