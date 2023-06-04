import React from 'react'
import './ItemList.css';
import { Item } from '../Item/Item';

export const ItemList = ({productos = []}) => {
  return (
    <div className='containerSection'>
        <div className='fila'>
          {productos.map((item) => <Item {...item} key={item.id}/>)}
        </div>
    </div>
  )
}
