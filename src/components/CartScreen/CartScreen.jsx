import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartScreen.css'

export const CartScreen = () => {
  
  const {cart, totalPrice, removeItem, emptyCart} = useContext(CartContext);

  return (
    <div className='container my-5'>
      {
        cart.length === 0
          ? <>
            <h3>Carrito vacio</h3>
            <hr/>
            <Link to='/' className='btn btn-success'>Volver a comprar</Link>
          </>
          : <>
            <h2>Lista de compras</h2>
            <hr />
            {
              cart.map((prod) => (
                <>
                  <div className='list'>
                    <div className='imageContainer'>
                      <img src={prod.image}/>
                    </div>
                    <div className='infoContainer'>
                      <p>{prod.name}</p>
                      <p>{prod.price}€</p>
                      <p>Cantidad: {prod.counter}</p>
                    </div>
                    <Button className='btn btn-danger' onClick={() => removeItem(prod.id)}>
                    <BsTrash />
                  </Button>
                  </div>
                  
                  <hr />
                  <hr />
                </>
              ))
            }
            <div className='completePurchase'>
              <strong>Precio Total: {totalPrice()}€</strong>
              <Link to='/checkout' className='btn btn-success'>
                Terminar Compra
              </Link>
            </div>
            <hr />
            <Button className='btn btn-danger' onClick={emptyCart}>Vaciar carrito</Button>
          </>
      }
    </div>
  )
}
