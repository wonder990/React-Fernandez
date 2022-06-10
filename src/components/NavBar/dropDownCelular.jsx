import { Link } from "react-router-dom";
import { useItemsContext } from "../../contexts/ItemsContext";

const DropDownCelular = () => {
  const { Btn, setItemProduct, ItemProduct } = useItemsContext();
  const itemTypeProduct = (e) => {
    setItemProduct(e);
  };
  console.log(ItemProduct);

  return (
    <>
      <div className="group inline-block relative w-full lg:w-auto">
        <Link
          onClick={() => itemTypeProduct()}
          to={"/productos"}
          className="w-full lg:hover:text-slate-400 hover:bg-zinc-700 lg:hover:bg-neutral-800 hover:text-white duration-300 font-medium py-[50px] px-[30px] lg:px:10 lg:py-[16px] text-white inline-flex items-center"
        >
          <span href="#" className="w-full mr-1">
            CELULARES
          </span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </Link>
        <ul className="absolute hidden w-full text-gray-700 pt-1 group-hover:block">
          <Link
            to={"/productos"}
            onClick={() => itemTypeProduct("samsung")}
            className="text-center"
          >
            <span
              className="font-bold rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              SAMSUNG
            </span>
          </Link>
          <Link
            to={"/productos"}
            onClick={() => itemTypeProduct("xiaomi")}
            className="text-center"
          >
            <span
              className="font-bold bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              XIAOMI
            </span>
          </Link>
          <Link
            to={"/productos"}
            onClick={() => itemTypeProduct("iphone")}
            className="text-center"
          >
            <span
              className="font-bold rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              IPHONE
            </span>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default DropDownCelular;
