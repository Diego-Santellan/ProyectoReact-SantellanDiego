import { Link } from "react-router-dom"


export const ItemListCard = ({id, image, name}) => {
  return (
    <div className="inline-block align-middle m-5  ">

        <div className="card w-80 glass border-solid border-4 border-neutral-400 hover:border-double hover:border-amber-900 hover:border-4 hover:bg-amber-50 hoover:text-black">
            <figure className="card w-64 glass m-5 place-self-center "><img src={image} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    
                    <Link to={`/detail/${id}`}><button className="btn bg-zinc-600 hover:bg-yellow-700">Más detalles</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}