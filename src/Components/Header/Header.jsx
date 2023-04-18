import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Img/Logo.png'
import "./Header.css"


const Header = () => {
    return (   
       <div id='headerId' className='header'>
        <Link className="logo" to="/"><img className='logo' src={Logo}/></Link> 
       </div>
       
    );
}

export default Header; 
