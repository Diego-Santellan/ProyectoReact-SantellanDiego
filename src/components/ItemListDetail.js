import { collection, doc,  getDoc,  getFirestore } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useCart } from "../context/cartContext"
import Itemcount from "./ItemCount"

const ItemListDetail = () => {

    const {addToCart} = useCart()

    const {id} = useParams()

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProduct()
    }, [])
    
    const getProduct = () => { 
        const data = getFirestore()
        const productsCollection = collection(data, 'productsModaCasalinga')
        const docRef = doc( productsCollection, id)
        getDoc( docRef ).then( res => {
            console.log(res.data());
            setProduct(res.data());
            setLoading(false)
        } )
    }

    
    const addHandler2 = () => { //2
        addToCart(product)

    }

    // Estado de conteo
    const [quantity, setQuantity] = useState(0)
        const onAdd = (quantity) => {
        setQuantity(quantity)
        
    }

    return (
        <>
            {   loading ? <h1>Cargando...</h1>
                :
        
                <div className="w-100 flex justify-center m-16 ">

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img className="w-96" src={product.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <div  id="btnContainer1" className="mt-52 card-actions justify-end">
                            { quantity > 0 
                                ? 
                                <div> 
                                    <Link to='/cart'><button className="btn m-3 btn-primary" onClick={addHandler2}>Confirm and finish buying</button></Link>
                                    <Link to='/'><button className="btn m-3 btn-primary" onClick={addHandler2}>Confirm purchase and continue shopping</button></Link> 
                                </div>

                              : 
                            <Itemcount onAdd={onAdd} onClick={addHandler2}/>}
                        </div>
                    </div>  
                </div>

                </div>
            }
        </>
    )
}

export default ItemListDetail