import React from 'react';
import Facebook from '../../Assets/Img/Facebook.png'
import Instagram from '../../Assets/Img/Instagram.png'
import LinkedIn from '../../Assets/Img/LinkedIn.png'
import Twitter from '../../Assets/Img/Twitter.png'
import "./Footer.css"

const Footer = () => {
  return (  
    <div id='footer' className='footer'>

  <div className="container-fluid">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">    
    
        <ul className="nav col-md-4 justify-content-start list-unstyled d-flex">
            <li className="ms-3">Privacidad</li>
            <li className="ms-3">Términos</li>
            <li className="ms-3">FAQ</li>
        </ul>
        <div>          
          <p className="nav row-md-4 justify-content-start">Síguenos en:</p>       
        <ul className="nav row-md-4  justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-body-secondary" href="https://es-es.facebook.com/"><img className="bi" width="24" height="24" src={Facebook} alt='' /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com"><img className="bi" width="24" height="24" src={Instagram} alt='' /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com"><img className="bi" width="24" height="24" src={LinkedIn} alt='' /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="https://twitter.com"><img className="bi" width="24" height="24" src={Twitter} alt='' /></a></li>
            
        </ul>
      </div>
  </footer>
  </div> 

    </div> 
    );
  }

export default Footer;