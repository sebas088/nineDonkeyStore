import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {

  const {calculateAmount} = useContext(CartContext);

  return (
    <>
      <FaShoppingCart className='cartShopping'/>
      <span> {calculateAmount()}</span>
    </>
  )
}
