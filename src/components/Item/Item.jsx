import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({name, id, description, price, image, category}) => {
  return (
    <div className='containerCard'>
      <img className='imgCard' src={image} alt={image}/>
      <div>
        <div>{description}</div>
        <div>{name}</div>
        <div>{price}€</div>
        <Link to={`/detail/${id}`}>
          <Button className='btnMoreInfo'>Más info</Button>
        </Link>
      </div>
    </div>
  )
}
