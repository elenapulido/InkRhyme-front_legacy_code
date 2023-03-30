import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Img/Logo.png'
import "./Header.css"


const Header = () => {
    return (   
       <div id='headerId' className='header'>
        <Link className="hogo" to="/"><img className='hogo' src={Logo}/></Link> 
       </div>
       
    );
}

export default Header;
