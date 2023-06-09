import React from 'react';
import './NavBar.css';
import logoHeader from '../../assets/images/logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    // <div className='menu'>
    //   <p>NineShoeStore</p>
    //   <p>Hombre</p>
    //   <p>Mujer</p>
    //   <p>Contactanos</p>s
    //   <CartWidget />
    // </div>
    <div className='menu'>
      <Link className='textNavbar containerNavbar' to="/productos/hombre">Hombre</Link>
      <Link className='textNavbar containerNavbar' to="/productos/mujer">Mujer</Link>
      <Link className='nameLogo' to="/">
        <div>
          <img src={logoHeader} className='logoHeader'/>
          <div>NineDonkeyStore</div>
        </div>
      </Link>
      <Link className='textNavbar containerNavbar' >Contactanos</Link>
      <Link className='textNavbar containerCart' to="/cart"><CartWidget/></Link>
    </div>
  )
}
