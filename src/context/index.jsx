import { createContext, useState, useEffect } from "react";


export const Context = createContext();
export function GlobalProvider({ children }) {

    const [productsAdded, setProductsAdded] = useState([]);
    const [products, setProducts ] = useState([])
    const [loading, setLoading] = useState(true);
    const [isCategoryRoute, setIsCategoryRoute ] = useState('')
    
    useEffect(() => {
        if (isCategoryRoute) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(res => setProducts(res.filter(product => product.category == isCategoryRoute)))
                console.log(products)
                setLoading(false)
        } else {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(res => setProducts(res))
                setLoading(false)
        
            }

    }, [isCategoryRoute])


    // console.log(productsAdded)
    function onAdd(product, quantity) {
        const isAlreadyAdded = isInCart(product);

        if (isAlreadyAdded) {
            const productToModify = productsAdded.find((productsAdded) => productsAdded.id === product.id
            );

            const productModified = {
                ...productToModify,
                quantity: productToModify.quantity + quantity
            };

            setProductsAdded((prevState) => prevState.map((productsAdded) =>
                productsAdded.id === product.id ? productModified : productsAdded
            ));
        } else {
            setProductsAdded((prevState) =>
                prevState.concat({ ...product, quantity }));
        }
    }

    function isInCart(product) {
        return productsAdded.some((productsAdded) => productsAdded.id === product.id);
    }

    function removeItem(id) {
        const remove = productsAdded.filter((product) => product.id !== id);
        setProductsAdded(remove);
    }
    function clearCart() {
        setProductsAdded([]);
    }

    function total() {
        const cartFinal = productsAdded.reduce((acc, product) => acc + (product.precio * product.quantity), 0);
        return cartFinal;
    }

    const value = {
        productsAdded,
        onAdd,
        removeItem,
        clearCart,
        setIsCategoryRoute,
        products,
        loading,
        isCategoryRoute
    }

    return <Context.Provider value={{productsAdded, onAdd, removeItem, clearCart, total, products, loading, setIsCategoryRoute, isCategoryRoute }}>{children}</Context.Provider>;
}
