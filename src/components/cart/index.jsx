import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart, clear } = useCartContext();

  const isCartEmpty = cart.length === 0;
  return (
    <div className="text-center min-h-screen p-6">
      {isCartEmpty ? (
        "No tienes productos en tu carrito, haz click en comprar para agregarlos aca"
      ) : (
        <>
          {cart.map((cartItem) => (
            <div
              className="overflow-hidden m-[20px] min-h-[200px] border-solid border-black border-4 flex flex-col items-center sm:flex-row"
              key={cartItem.item.id}
            >
              <img
                className="w-auto min-h-[200px] max-w-[200px] sm:h-[95%]"
                src={cartItem.item.img}
                alt={cartItem.item.name}
              />
              <div className="flex flex-col ml-[50px]">
                <span className="m-[10px] font-semibold text-[16px] sm:text-[18px] sm:m-[0]">
                  <strong>Celular: </strong>
                  {cartItem.item.name}
                </span>
                <span className="m-[10px] font-semibold text-[16px] sm:text-[18px] sm:m-[0]">
                  <strong>Almacenamiento: </strong>
                  {cartItem.item.almacenamiento}
                </span>
                <span className="m-[10px] font-semibold text-[16px] sm:text-[18px] sm:m-[0]">
                  <strong>Memoria ram: </strong>
                  {cartItem.item.mram}
                </span>
                <span className="m-[10px] font-semibold text-[16px] sm:text-[18px] sm:m-[0]">
                  <strong>Precio: </strong>
                  {cartItem.item.precio}
                </span>
                <span className="m-[10px] font-semibold text-[16px] sm:text-[18px] sm:m-[0]">
                  <strong>Cantidad: </strong>
                  {cartItem.quantity}
                </span>
              </div>
            </div>
          ))}
        </>
      )}
      <div>
        {isCartEmpty ? null : (
          <button
            className="m-[20px] w-[200px] h-[50px] text-xl bg-orange-500 text-white rounded hover:bg-amber-700 duration-500"
            onClick={clear}
          >
            Comprar
          </button>
        )}

        <div>
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
