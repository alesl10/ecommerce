import { useContext } from "react";
import ItemList from "../itemList";
import { Context } from "../../context";


function ItemListContainer() {

    const { products, loading } = useContext(Context)

    return (
        <main className=" container m-auto aspect-video">
            {loading ? <h2 className=" h-full flex items-center justify-center  text-2xl font-bold text-blue-500">Cargando...</h2> :
                <ItemList products={products} />
            }
        </main>
    )
}

export default ItemListContainer;