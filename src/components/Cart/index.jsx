import { useContext } from "react";
import { Context } from '../../context'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Cart() {

    const { productsAdded, removeItem, clearCart, total } = useContext(Context);

    function totalProduct(product) {
        const precioParcial = product.price * product.quantity;
        return precioParcial;
    }

    return (
        <div className=" m-auto  text-center">
            {productsAdded.length > 0 ?
                <main>
                    <span>{productsAdded.map((product) => {
                        return (
                            <div className="flex justify-between items-center bg-white rounded-md p-2">
                                <div>
                                    <img src={product.image} alt="imagen producto a comprar" className=" size-20" />
                                </div>
                                <div className="flex gap-2">
                                    <span>{product.title} - {product.category} - </span>
                                    <span> Cantidad: {product.quantity} - </span>
                                    <span> <b>Precio unidad $ {product.price} |  $ {totalProduct(product)}</b> </span>
                                </div>
                                <Button className=" px-2 bg-red-500 mx-2 rounded-full text-white hover:text-black" onClick={() => removeItem(product.id)}>Eliminar producto</Button>
                            </div>
                        )
                    }
                    )}</span>
                    <div className="finalCart">
                        <h2>Precio total a pagar: $ {total()}</h2>
                        <div >
                            <NavLink to="/checkout"><Button className="cartButton">Terminar compra</Button></NavLink>
                            <Button className="cartButton" onClick={() => clearCart()}>Vaciar carrito</Button>
                            <NavLink to="/"><Button className="cartButton">Seguir comprando</Button></NavLink>

                        </div>
                    </div>
                </main>
                : <div >
                    <h2 className="text-2xl">Oops! No tienes productos en el carrito</h2>
                    <NavLink to="/"><Button className="bg-white px-2 rounded-full hover:bg-black hover:text-white">Volver al home!</Button></NavLink>
                </div>}
        </div>
    )
}

export default Cart;