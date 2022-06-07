import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addItem(item, quantity) {
    const newCart = [...cart];
    if (isInCart(item.id)) {
      const index = cart.findIndex((cartItem) => cartItem.item.id === item.id);

      newCart[index].quantity += quantity;
    } else {
      newCart.push({ item, quantity });
    }

    setCart(newCart);
  }

  function removeItem(itemId) {
    let newCart = [...cart];

    if (isInCart(itemId)) {
      const index = cart.findIndex((cartItem) => cartItem.id === itemId);
      newCart = newCart.filter((i) => i !== index);
    }
  }
  function clear() {
    setCart([]);
  }

  function isInCart(id) {
    return cart.some((cartItem) => cartItem.item.id === id);
  }

  function removeFromCart(id) {
    const itemRemove = cart.filter((item) => item.item.id !== id);
    setCart(itemRemove);
    console.log(itemRemove);
  }

  function calcPriceCart() {
    return cart.reduce(
      (acc, element) => acc + element.item.precio * element.quantity,
      0
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        calcPriceCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => useContext(CartContext);
