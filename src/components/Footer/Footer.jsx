import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

export const Footer = () => {
  return (
    <footer className='containerFooter'>
      <div>
        <img className='logo' src={logo} alt='logo'></img>
        <div className='nameLogo'>NineDonkeyStore</div>
      </div>
      <div className='containerContacts'>
        <h3>Contactanos:</h3>
        <p>WhatsApp: +99 999999999</p>
        <p>Instagram: @NineDonkey</p>
        <p>TikTok: NineDonkeyShoes</p>
      </div>
    </footer>
    
  )
}
