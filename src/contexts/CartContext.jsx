import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState([])

    function addItem(item, quantity) {

        const newCart = [...cart]
        if(isInCart(item.id)) {
            const index = cart.findIndex((cartItem) => cartItem.item.id === item.id)
            
            newCart[index].quantity += quantity
        } else {
            newCart.push({item, quantity})
        }
        
        setCart(newCart)
    }

    function removeItem(itemId) {
        
        let newCart = [...cart]

        if(isInCart(itemId)) {
            const index = cart.findIndex((cartItem) => cartItem.id === itemId)
           newCart = newCart.filter((cartItem, i) => i !== index)
        }
        
    }
    function clear() {
        setCart([])
    }

    function isInCart (id) {
        return cart.some((cartItem) => cartItem.item.id == id)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCartContext = () => useContext(CartContext)