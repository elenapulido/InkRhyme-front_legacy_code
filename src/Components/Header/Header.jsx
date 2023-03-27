import React from 'react'
import Logo from '../../Assets/Img/Logo.png'
import "./Header.css"


const Header = () => {
    return (   
       <div className='Header'>
        <img className='Logo' src={Logo}/>
       </div>
       
    );
}

export default Header;
