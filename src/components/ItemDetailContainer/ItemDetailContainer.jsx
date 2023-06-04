import React, { useEffect, useState } from 'react'
import { getFirestore } from '../../firebase/config';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    const [loading, setLoading] = useState(false);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const products = db.collection('productos');

        const item = products.doc(itemId);

        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id, ...doc.data()
                })
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })



    }, [itemId])

    // setLoading(true);
    // pedirProductos()
    //     .then(resp => {
    //         setItem(resp.find( prod => prod.id !== Number(itemId)))
    //     })
    //     .catch((error) => console.log(error))
    //     .finally(() => {
    //         setLoading(false)
    //     },[itemId])


    return (
        <section>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item} />
            }
        </section>
    )
}
