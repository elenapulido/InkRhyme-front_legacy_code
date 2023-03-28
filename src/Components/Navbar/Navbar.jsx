import React from 'react'
import "./Navbar.css"
import Plus from '../../Assets/Img/Plus.png'
import Hamburguer from '../../Assets/Img/Hamburguer.png'
const Navbar = () => {
  return (   
      <nav className='navigation'>
        <img className='plusNavigation' src={Plus}/>
        <img className='hamburguernavigation' src={Hamburguer}/>
      </nav>    
  );
}

export default Navbar;

