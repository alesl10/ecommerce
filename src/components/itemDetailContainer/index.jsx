import { useState } from "react"
import ItemDetail from "../itemDetail"
import { useEffect } from "react";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const params = useParams();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.find(prod => prod.id == params.id)))
            setLoading(false)

    }, [])

    return (
        <div>
            {loading ? <h2>Cargando...</h2> : ""}
            <ItemDetail product={products} />
        </div>
    )
}

export default ItemDetailContainer;