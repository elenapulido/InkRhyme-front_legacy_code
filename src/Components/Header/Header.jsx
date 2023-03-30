import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Img/Logo.png'
import "./Header.css"


const Header = () => {
    return (   
       <div id='headerId' className='Header'>
        <Link className="Logo" to="/"><img className='Logo' src={Logo}/></Link> 
       </div>
       
    );
}

export default Header;
