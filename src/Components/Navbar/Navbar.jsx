import React, {useState} from 'react'
import "./Navbar.css"
import Plus from '../../Assets/Img/Plus.png'
import Hamburguer from '../../Assets/Img/Hamburguer.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  let [menu, setMenu] = useState(false)

  return (   
      <nav className='navigation'>
        <Link  to="/Form"><img className='plusNavigation' src={Plus}/></Link>
        <div>
        <Link ><img className='hamburguernavigation' onClick={() => {setMenu(!menu)}} src={Hamburguer}/></Link>
        <ul className={`dropdown ${menu ? "drop-active" : "drop-inactive"}`}>
          <li>sdf</li>
          <li>sdf</li>
          <li>sf</li>
        </ul>
        </div>
      </nav>
  );
}

export default Navbar;

