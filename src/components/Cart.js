import React from "react"
import { useCart } from "../context/cartContext"


const Cart = () => {

  const {products, clearCart} = useCart()

  return (
    <div className="m-5">
      <h2>Cart</h2>
      {products.map( (p, i) => 
        <ul key={i}>
          <li><img src={p.image} width="100px"/></li>
          <li>{p.name}</li>
        </ul> 
      ) }

      
        <button onClick={clearCart} className="btn ml-6 btn-primary">Limpiar carrito</button>
    </div>
  )
}
export default Cart