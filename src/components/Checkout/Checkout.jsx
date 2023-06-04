import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Checkout = () => {

  const [email, setEmail] = useState("")

  const [name, setName] = useState("")

  const [lastname, setLastname] = useState("")

  const [telephone, setTelephone] = useState("")

  return (
    <div>
        <h3>Terminar Compra</h3>
        <hr/>

        <form className='container mt-3'>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Telefono</label>
                <input type="text" className="form-control" />
            </div>
            <button type='submit' className='btn btn-success'>Finalizar</button>
            <Link to='/cart' className='btn btn-info'>Volver al carrito</Link>

        </form>

    </div>
  )
}
