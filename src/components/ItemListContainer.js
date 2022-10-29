import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from "react"
import { ItemListCard } from './ItemListCard'

const ItemListContainer = () => {


    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])
    
    const getProducts = () => { 
        const data = getFirestore()
        const productsCollection = collection(data, 'productsModaCasalinga')
        getDocs(productsCollection).then( res => {
            const productsData = res.docs.map( d => ({id: d.id, ...d.data()}))
            console.log(productsData);
            setProducts(productsData);
            setLoading(false)

        })
    }

    return (
        <div className='bg-stone-300'>
            { loading ? <h1>Cargando...</h1>
            : products.map( p => <ItemListCard key={p.id}{...p}/> ) }

        </div>
    )
}
export default ItemListContainer