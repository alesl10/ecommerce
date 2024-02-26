import { useContext } from "react";
import ItemList from "../itemList";
import { Context } from "../../context";


function ItemListContainer() {

    const { products, loading } = useContext(Context)

    return (
        <main className=" container m-auto ">
            {loading ? <h2>Cargando...</h2> :
                <ItemList products={products} />
            }
        </main>
    )
}

export default ItemListContainer;