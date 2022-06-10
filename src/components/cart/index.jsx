import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { useItemsContext } from "../../contexts/ItemsContext";
import FormCart from "./formCart";

const Cart = () => {
  const { cart, calcPriceCart, removeFromCart } = useCartContext();
  const { ModDark } = useItemsContext();

  const [purchaseForm, setpurchaseForm] = useState(true);
  const valuePurchase = () => setpurchaseForm(!purchaseForm);

  useEffect(() => {
    calcPriceCart();
  }, [cart]);

  const isCartEmpty = cart.length === 0;
  console.log(cart);
  return (
    <div
      className={`relative duration-500 min-h-screen py-[30px] ${
        ModDark ? "bg-slate-100" : "bg-slate-900"
      }`}
    >
      {isCartEmpty ? (
        <>
          <div
            className={
              ModDark
                ? "duration-500 text-center"
                : "duration-500 text-center text-white"
            }
          >
            <p className="font-bold text-3xl my-8 text-center sm:text-5xl">
              No tienes productos en tu carrito, haz click en seguir comprando
              para agregarlos aca
            </p>
            <i className="fa-solid fa-arrow-down animate-bounce w-6 h-20 ... text-[50px] mt-[50px] text-amber-500"></i>
          </div>
        </>
      ) : (
        <>
          {cart.map((cartItem) => (
            <article
              className={
                ModDark
                  ? "duration-500 relative sm:mx-auto sm:w-[70%] flex-col m-[20px] min-h-[200px] shadow-lg shadow-gray-400 flex items-center lg:flex-row py-50px"
                  : "duration-500 text-white relative sm:mx-auto sm:w-[70%] flex-col m-[20px] min-h-[200px] bg-slate-700 flex items-center lg:flex-row sm:py-50px"
              }
              key={cartItem.item.id}
            >
              <div className="sm:w-[40%] h-[250px] flex items-center">
                <img
                  className="mx-auto  w-auto max-h-[90%] max-w-[200px] sm:max-h-[95%]"
                  src={cartItem.item.img}
                  alt={cartItem.item.name}
                />
              </div>
              <div className="flex flex-col lg:items-start w-[90%] items-center m-[10px] lg:ml-[50px] lg:w-[40%]">
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 text-[14px]">
                    CELULAR:{" "}
                  </strong>
                  {cartItem.item.name}
                </span>
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 text-[14px]">
                    ALMACENAMIENTO:{" "}
                  </strong>
                  {cartItem.item.almacenamiento}
                </span>
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 text-[14px]">
                    MEMORIA RAM:{" "}
                  </strong>
                  {cartItem.item.mram}
                </span>
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 text-[14px]">
                    PRECIO:{" "}
                  </strong>
                  ${cartItem.item.precio}
                </span>
                <span className="m-[10px] font-bold text-[15px] sm:text-[16px]">
                  <strong className="text-orange-500 text-[14px]">
                    CANTIDAD:{" "}
                  </strong>
                  {cartItem.quantity}
                </span>
              </div>
              <div className="flex justify-items-end absolute right-0 top-0 mr-[20px] mt-[20px]">
                <button onClick={() => removeFromCart(cartItem.item.id)}>
                  <i className="text-red-500 fa-solid fa-trash text-[25px]"></i>
                </button>
              </div>
            </article>
          ))}
        </>
      )}
      <div className="w-full flex flex-col items-center mt-[30px]">
        {isCartEmpty ? null : (
          <div
            className={
              ModDark
                ? "duration-500 shadow-md shadow-gray-400 p-[20px]  bg-gray-200 flex flex-col items-center w-[250px] sm:w-[350px]"
                : "duration-500 text-white shadow-md p-[20px] bg-slate-700 flex flex-col items-center w-[250px] sm:w-[350px]"
            }
          >
            <span className="text-center m-[10px] font-semibold text-[15px] sm:text-[18px]">
              <strong>PRECIO TOTAL:</strong> ${calcPriceCart()}
            </span>
            <button
              className="text-center w-[200px] h-[30px] text-xl bg-orange-500 text-white rounded hover:bg-amber-700 duration-500"
              onClick={valuePurchase}
            >
              Comprar
            </button>
          </div>
        )}

        <div className="mt-[10px]">
          <Link to="/productos">
            <button className="m-[20px] w-[200px] h-[50px] text-xl bg-orange-500 text-white rounded hover:bg-amber-700 duration-500">
              Seguir Comprando
            </button>
          </Link>
        </div>
        {purchaseForm ? (
          ""
        ) : (
          <FormCart precio={calcPriceCart} cart={cart} form={valuePurchase} />
        )}
      </div>
    </div>
  );
};

export default Cart;
