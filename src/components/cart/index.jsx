import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart, clear, calcPriceCart, removeFromCart } = useCartContext();

  useEffect(() => {
    calcPriceCart();
  }, cart);

  // useEffect(() => {
  //   setPrecio(
  //     Precio + 1 // cart.reduce((acc, item) => acc + item.quantity * item.item.precio)
  //   );
  // }, [cart]);

  // const totalprice = (c) => {
  //   return c.reduce((acc, item) => acc + item.quantity * item.item.precio);
  // };
  // console.log(totalprice(cart));

  const isCartEmpty = cart.length === 0;
  console.log(cart);
  return (
    <div className="text-center min-h-screen p-6">
      {isCartEmpty ? (
        "No tienes productos en tu carrito, haz click en comprar para agregarlos aca"
      ) : (
        <>
          {cart.map((cartItem) => (
            <article
              className="sm:mx-auto sm:w-[70%] flex flex-col m-[20px] min-h-[200px] shadow-lg shadow-gray-400 border-2 flex items-center sm:flex-row"
              key={cartItem.item.id}
            >
              <div className="sm:w-[40%]">
                <img
                  className="m-auto w-auto min-h-[200px] max-w-[200px] sm:h-[95%]"
                  src={cartItem.item.img}
                  alt={cartItem.item.name}
                />
              </div>
              <div className="flex flex-col items-start  m-[10px] sm:ml-[50px] sm:w-[40%]">
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 font-extrabold">
                    CELULAR:{" "}
                  </strong>
                  {cartItem.item.name}
                </span>
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 font-extrabold">
                    ALMACENAMIENTO:{" "}
                  </strong>
                  {cartItem.item.almacenamiento}
                </span>
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 font-extrabold">
                    MEMORIA RAM:{" "}
                  </strong>
                  {cartItem.item.mram}
                </span>
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 font-extrabold">
                    PRECIO:{" "}
                  </strong>
                  ${cartItem.item.precio}
                </span>
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 font-extrabold">
                    CANTIDAD:{" "}
                  </strong>
                  {cartItem.quantity}
                </span>
              </div>
              <div className="flex justify-items-end">
                <button onClick={() => removeFromCart(cartItem.item.id)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </article>
          ))}
        </>
      )}
      <div className="w-full flex flex-col items-center mt-[80px]">
        {isCartEmpty ? null : (
          <div className="shadow-md shadow-gray-400 p-[20px]  bg-gray-200 flex flex-col items-center w-[250px] sm:w-[350px]">
            <span className="text-center m-[10px] font-semibold text-[15px] sm:text-[18px]">
              <strong>PRECIO TOTAL:</strong> ${calcPriceCart()}
            </span>
            <button
              className="w-[200px] h-[30px] text-xl bg-orange-500 text-white rounded hover:bg-amber-700 duration-500"
              onClick={clear}
            >
              Comprar
            </button>
          </div>
        )}

        <div className="mt-[40px]">
          <Link to="/productos">
            <button className="m-[20px] w-[200px] h-[50px] text-xl bg-orange-500 text-white rounded hover:bg-amber-700 duration-500">
              Seguir Comprando
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
