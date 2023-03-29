import React from 'react';
import Facebook from '../../Assets/Img/Facebook.png'
import Instagram from '../../Assets/Img/Instagram.png'
import LinkedIn from '../../Assets/Img/LinkedIn.png'
import Twitter from '../../Assets/Img/Twitter.png'
import "./Footer.css"

const Footer = () => {
  return (  
    <div id="footer" className="footer">
      
        <div className='LegalInfo'>
          <ul>
           <li>Privacidad</li>
           <li>Términos</li>
           <li>FAQ</li>
          </ul>
      </div>
     
        <div className='column2'>   
          <div className='continue'>
            <p>Síguenos en:</p>
          </div> 
          <div className='icons'>
            <a className='continue' href='https://es-es.facebook.com/'><img className='iconfacebook' src={Facebook} /></a>
            <a className='continue' href='https://www.instagram.com/'><img className='iconinstagram' src={Instagram}/></a>
            <a className='continue' href='https://www.linkedin.com/'><img className='iconlinkedin' src={LinkedIn}/></a>
            <a className='continue' href='https://twitter.com/'><img className='icontwitter' src={Twitter} /></a>
          </div>
        </div>  
      
    </div>  
    );
  }


export default Footer;