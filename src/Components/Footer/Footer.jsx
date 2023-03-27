import React from 'react';
import Facebook from '../../Assets/Img/Facebook.png'
import Instagram from '../../Assets/Img/Instagram.png'
import LinkedIn from '../../Assets/Img/LinkedIn.png'
import Twitter from '../../Assets/Img/Twitter.png'
import "./Footer.css"

const Footer = () => {
  return (  
    <div className="footer">
      <div className='column'> 
        <div className='LegalInfo'>
          <ul>
           <li>Privacidad</li>
           <li>Términos</li>
           <li>FAQ</li>
          </ul>
       </div>
      </div>
      <div className='column'>
        <div className='continue'>
          <p>Síguenos en:</p>
        </div>
        <div className='icons'>
         <img className='iconfacebook' src={Facebook} />
         <img className='iconinstagram' src={Instagram}/>
         <img className='iconlinkedin' src={LinkedIn}/>
         <img className='icontwitter' src={Twitter} />
        </div>
      </div> 
    </div>  
    );
  }


export default Footer;