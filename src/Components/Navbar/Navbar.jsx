import React, { useState } from 'react'
import "./Navbar.css"
import Plus from '../../Assets/Img/Plus.png'
import Hamburguer from '../../Assets/Img/Hamburguer.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  }

  return (   
    <nav className='navigation'>
      <button className='plus-btn'>
        <Link  to="/Form"><img className='plusNavigation' src={Plus} alt='Plus Menu'/></Link>
      </button>
      <button className='hamburger-btn' onClick={handleClick}>
        <img src={Hamburguer} alt='Hamburguer Menu' />
      </button>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
      <Link  to="/" className='link-a'><li>Inicio</li></Link>
        <li>Explora</li>
      <Link to="/Search" className='link-a'><li>Buscar</li> </Link>
        <li onClick={scrollToFooter}>Conócenos</li>
      </ul>
    </nav> 
  );
}

export default Navbar;

