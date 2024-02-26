import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
// import { Context } from '../../context';
// import { useContext } from 'react';

function Item({ product }) {


    return (

        <article className=" mt-20 size-[300px] flex flex-col gap-2 justify-around bg-white rounded-2xl shadow-lg overflow-hidden text-center p-2">
            <img className=' max-h-[50%] m-auto' src={product.image} alt="imagen de producto" />
            <p>{product.title} </p>
            <p className="producDescription">${product.price}</p>
            <Button variant="dark"><NavLink className=' bg-blue-500 rounded-full p2 shadow-lg text-center p-2 hover:text-white' to={`/item/${product.id}`}>Ver detalle</NavLink></Button>



        </article>
    )
}
export default Item;