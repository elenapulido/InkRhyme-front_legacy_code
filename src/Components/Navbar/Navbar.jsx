import React from 'react'
import "./Navbar.css"
import Plus from '../../Assets/Img/Plus.png'
import Hamburguer from '../../Assets/Img/Hamburguer.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (   
      <nav className='navigation'>
        <Link  to="/Form"><img className='plusNavigation' src={Plus}/></Link>
        <Link  to="/Article"><img className='hamburguernavigation' src={Hamburguer}/></Link>
      </nav>    
  );
}

export default Navbar;

