import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { useItemsContext } from "../../contexts/ItemsContext";
import DropDownCelular from "./dropDownCelular";

const NavBar = () => {
  const { cart } = useCartContext();
  const { ModDark, Bg } = useItemsContext();

  const [Btn, setBtn] = useState(false);
  const btnDropDown = () => {
    setBtn(!Btn);
    return setBtn;
  };

  return (
    <header className="font-sans bg-neutral-800 flex justify-between content-center h-14">
      <Link
        to="/"
        className="duration-300 hover:text-slate-400 order-2 text-white text-xl font-bold lg:mx-12 flex items-center lg:order-1 "
      >
        <i className="text-white text-[22px] mr-[10px] fa-brands fa-phoenix-framework"></i>
        AGON
      </Link>
      <button onClick={btnDropDown} className="my-[16px] lg:hidden">
        <i
          className={
            Btn
              ? "text-white mx-[20px] sm:mx-12 text-[20px] fa-solid fa-xmark"
              : "text-white mx-[20px] sm:mx-12 text-[20px] fa-solid fa-bars"
          }
        ></i>
      </button>
      <ul
        className={
          Btn
            ? "z-40 absolute items-center text-center top-14 w-[100%] bg-neutral-800 order-1 flex flex-col realtive justify-center lg:flex-wrap lg:block lg:relative lg:top-0"
            : "hidden items-center text-center top-14 w-[100%] bg-neutral-800 order-1 flex flex-col realtive justify-center lg:flex-wrap lg:block lg:relative lg:top-0"
        }
      >
        <DropDownCelular />
        <Link
          to="/"
          className="hover:bg-zinc-700 lg:hover:bg-neutral-800 hover:text-white lg:hover:text-slate-400 duration-300 font-medium py-[50px] lg:py-[18px] w-full sm:px-[10px] lg:px-10 text-white items-center"
        >
          SOBRE NOSOTROS
        </Link>
        <Link
          to="/contacto"
          className="hover:bg-zinc-700 lg:hover:bg-neutral-800 hover:text-white lg:hover:text-slate-400 duration-300 font-medium lg:px-10 py-[50px] w-full lg:py-[18px] text-white items-center"
        >
          CONTACTO
        </Link>
      </ul>
      <Link
        to="/cart"
        className="hover:text-slate-400 order-3 flex items-center mx-[10px] sm:mx-[10px] my-5 sm:order-3 lg:w-auto"
      >
        <i className="text-[23px] text-white fa-solid fa-cart-shopping"></i>
        <span className="pt-2 pb-6 pl-2 text-[17px] text-white">
          {cart.length}
        </span>
      </Link>
      <button
        onClick={Bg}
        className="rounded-lg w-auto h-auto border-solid border-white border-1 order-3 flex items-center mx-[10px] lg:mx-[30px] sm:order-3 lg:w-auto"
      >
        <span
          className={
            ModDark
              ? "duration-300 bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center"
              : "duration-300 h-[30px] w-[30px] flex items-center justify-center"
          }
        >
          <i
            className={
              ModDark
                ? "duration-300 fa-solid fa-sun rounded-full text-[20px]"
                : "duration-300 text-white fa-solid fa-sun rounded-full"
            }
          ></i>
        </span>
        <span
          className={
            ModDark
              ? "duration-300 h-[30px] w-[30px] flex items-center justify-center"
              : "duration-300 bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center"
          }
        >
          <i
            className={
              ModDark
                ? "duration-300 text-white rounded-full fa-solid fa-moon"
                : "duration-300 rounded-full text-[20px] fa-solid fa-moon"
            }
          ></i>
        </span>
      </button>
    </header>
  );
};

export default NavBar;
