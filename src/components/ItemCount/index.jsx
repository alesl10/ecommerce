import { Button, Container } from "react-bootstrap";
import { useState } from "react";



function ItemCount({ stock, onAdd }) {
    const [cant, setCant] = useState(1);


    return (
        
            <div className="mt-10 text-xl" >
                <div className="flex gap-2 font-bold text-lg">
                    <div>
                        <Button
                            variant="dark"
                            className=" bg-red-500 w-4 rounded-full text-white"
                            onClick={() => setCant((prevState) => prevState - 1)}
                            disabled={cant < 2}
                        >
                            -
                        </Button>
                    </div>

                    <div >{cant}</div>
                    <div>
                        <Button
                            className=" bg-green-500 w-4 rounded-full text-white"
                            disabled={cant === stock}
                            onClick={() => setCant((prevState) => prevState + 1)}
                        >
                            +
                        </Button>
                    </div>
                </div>
                <div >
                    <Button className=" bg-blue-500 px-2 rounded-full mt-2 text-white hover:text-blue-800" onClick={() => {
                        onAdd(cant);
                        console.log(cant);
                    }
                    }>
                        Añadir al carrito
                    </Button>
                </div>
            </div>
        
    );
}

export default ItemCount;
