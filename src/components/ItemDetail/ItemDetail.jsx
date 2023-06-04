import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';
import './ItemDetail.css'

export const ItemDetail = ({name, id, description, price, image, category, stock}) => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  const {addToCart} = useContext(CartContext);


  const [counter, setCounter] = useState(0);

  const addPurchase = () => {
    const newItem = {
      name,
      id,
      description,
      image,
      price,
      category,
      counter,
    }
    console.log(newItem)
    addToCart(newItem)
  }
  
  return (
    <div className='container'>
    <div className='containerDetail'>
      <div>
        <img className='image' src={image} alt={image}/>
      </div>
      <div className='containerInfo'>
        <div>{description}</div>
        <div>{name}</div>
        <div>{price}€</div>
        <ItemCount max={stock} modify={setCounter} amount={counter} />
        <Link to={`/detail/${id}`}>
          <Button className='btnAddCart' onClick={addPurchase}>Agregar al carrito</Button>
        </Link>
        <Link to='/cart' className='btn btn-info btnGoToCart'>
          Ir al carrito
        </Link>
        <Button onClick={goBack} className='btn btn-sucess btnGoBack'>Volver atrás</Button>
      </div>
    </div>
    </div>
  )
}