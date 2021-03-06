import React, { useContext } from 'react'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {


    //const init = JSON.parse(localStorage.getItem('carrito')) || []      // Cada vez que inicio la app es lo que leo del local storage o un array vacio si es undefined.

    const {carrito,vaciarCarrito,removeItem,calcularTotal} = useContext(CartContext)

    return (
        <div className="container my-5">

            {
                carrito.length === 0
                ? 
                <>
                    <h2>No hay productos agregados</h2>
                    <Link to="/" className="btn btn-success">Ir a comprar</Link>
                </>
                :
                    <>
                        <h2>Resumen de compra</h2>
                        <hr/>
                        
                        {
                            carrito.map( (prod) => (
                                <div>
                                    <h4>{prod.title}</h4>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio: ${prod.price * prod.cantidad}</p>
                                    <button
                                    className="btn btn-danger"
                                    onClick={()=> removeItem(prod.id)}
                                    >
                                        <BsFillTrashFill/>
                                    </button>
                                </div>
                            ))
                        }
                        <hr/>
                        <h3>Precio Total: ${calcularTotal()} </h3>
                        <button
                        className="btn btn-danger"
                        onClick={vaciarCarrito}
                        >
                            Vaciar Carrito
                        </button>

                        <Link to="/checkout" className="btn btn-success">
                            Terminar compra
                        </Link>
                    </>
            }

        </div>
    )
}
