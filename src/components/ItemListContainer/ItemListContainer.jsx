import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/config'


export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  
  const [loading, setLoading] = useState(false);

  const {categoryId} = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const products = db.collection('productos');   
    
    if(categoryId){
      const filter = products.where("category", "==", categoryId)
      filter.get()
        .then((resp) => {
          const newItem = resp.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
          })
          setItems(newItem)
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        })
    }else{
      products.get()
      .then((resp) => {
        const newItem = resp.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        })
        setItems(newItem);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      })
    }
  }, [categoryId])
 
  return (
    <>
    {/* Nuestro componente inicia con el loading
    en "true" y cuando resuelve, imprime en pantalla
    todo nuestro componente ItemList */}
      {
        loading
        ?<h2>Cargando...</h2>
        :<ItemList productos={items}/>
      }
    </>
  )
}
