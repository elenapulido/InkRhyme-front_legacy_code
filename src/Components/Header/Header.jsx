import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Img/Logo.png'
import "./Header.css"

const Header = () => {
    return (   
    <div  id='headerId' className='header'>

    <div class="container">
    <header class="d-flex justify-content-center py-3">    
        <Link className="logo" to="/"><img className='logo' src={Logo}/></Link>
    </header>
    </div>

    </div>
    );
}

export default Header;
