import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import DropDownCelular from "./dropDownCelular";

const NavBar = () => {
  const { cart } = useCartContext();

  return (
    <div className="font-sans bg-black flex justify-between content-center h-14">
      <Link
        to="/"
        className="text-white text-xl font-bold mx-12 flex items-center"
      >
        AGON
      </Link>
      <ul className="flex items-center">
        <DropDownCelular li="MARCA" />
        <Link to="/" className="text-white font-medium px-10">
          SOBRE NOSOTROS
        </Link>
        <Link to="/descuentos" className="text-white font-medium px-10">
          DESCUENTOS
        </Link>
      </ul>
      <Link to="/cart" className="flex items-center mx-12 my-5">
        <i className="text-[23px] text-white fa-solid fa-cart-shopping"></i>
        <span className="pt-2 pb-6 pl-2 text-[17px] text-white">
          {cart.length}
        </span>
      </Link>
    </div>
  );
};

export default NavBar;
