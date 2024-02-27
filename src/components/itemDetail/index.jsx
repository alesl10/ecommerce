import { useContext, useState } from "react"
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount'
import { NavLink } from "react-router-dom";
import { Context } from '../../context'


function ItemDetail({ product }) {
    const { onAdd } = useContext(Context);
    const [added, setAdded] = useState(0);

    function onAddProducto(cant) {
        setAdded(cant);
        onAdd(product, cant);
    }

    return (
        <div className=" aspect-auto pt-20">
            <div className=" grid grid-cols-2 gap-4 px-20">

                <div className=" col-span-1">
                    <img className=" aspect-auto w-[70%] m-auto"
                        src={product.image}
                        alt="imagen de producto"
                    />
                </div>

                <div className=" flex flex-col justify-center gap-10" >
                    <h2 className="  font-bold text-2xl"> {product.title}</h2>

                    <div>
                        <p className=" text-blue-600">Precio: $ {product.price}</p>
                        <span>{product.description}</span><br />


                        <div>
                            {added == 0 && (
                                <ItemCount stock={product.stock} onAdd={onAddProducto} />
                            )}
                            <div>
                                {added >= 1 && (
                                    <div className="flex justify-around items-center text-xl">
                                        <NavLink to="/cart">
                                            <Button className=" text-white bg-blue-500 px-2 rounded-full m-4 hover:text-blue-600">Ir al carrito</Button>
                                        </NavLink>
                                        <NavLink to="/">
                                            <Button className="bg-green-400 text-green-900 px-2 rounded-full m-4 hover:text-white">Seguir comprando</Button>
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail