import React from 'react';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    // <div className='menu'>
    //   <p>NineShoeStore</p>
    //   <p>Hombre</p>
    //   <p>Mujer</p>
    //   <p>Contactanos</p>
    //   <CartWidget />
    // </div>
    <div className='menu'>
      <Link className='nameLogo' to="/">NineDonkeyStore</Link>
      <Link className='textNavbar containerNavbar' to="/productos/hombre">Hombre</Link>
      <Link className='textNavbar containerNavbar' to="/productos/mujer">Mujer</Link>
      <Link className='textNavbar containerNavbar' >Contactanos</Link>
      <Link className='textNavbar' to="/cart"><CartWidget/></Link>
    </div>
  )
}
