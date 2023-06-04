import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

export const Footer = () => {
  return (
    <footer className='containerFooter'>
      <div>
        <img className='logo' src={logo} alt='logo'></img>
        <div className='name'>NineDonkeyStore</div>
      </div>
      <div>
        <h3>Sobre Nosotros:
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti dicta, eos deserunt perspiciatis ut qui doloribus rerum ad, accusamus at quis nam repellendus fugit ipsum voluptate cumque modi reiciendis!</p>
        </h3>
      </div>
      <div>
        <h3>Contactanos:
          <p>WhatsApp: 999999999</p>
          <p></p>
        </h3>
      </div>
    </footer>
    
  )
}
