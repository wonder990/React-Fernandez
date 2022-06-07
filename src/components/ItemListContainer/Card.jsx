import { Link } from "react-router-dom";
import { useItemsContext } from "../../contexts/ItemsContext";

const Card = ({ item }) => {
  const { ModDark } = useItemsContext();
  return (
    <Link
      to={`/productos/${item.id}`}
      className={
        ModDark
          ? "h-[380px] producto bg-white shadow-lg shadow-gray-500 rounded-lg overflow-hidden flex items-center flex-col  w-64 m-6 hover:text-white hover:bg-amber-200 duration-500"
          : "h-[380px] producto bg-slate-700 shadow-lg rounded-lg overflow-hidden flex items-center flex-col  w-64 m-6 hover:text-white hover:bg-amber-200 duration-500"
      }
    >
      <div className="w-full h-[72%] overflow-hidden duration-700 hover:scale-110">
        <img className="mx-auto my-6 h-56" src={item.img} alt={item.name} />
      </div>
      <div className="h-[28%] bg-neutral-800 text-white overflow-hidden text-base font-bold w-full justify-center border-black flex flex-col items-center">
        <p>{item.name}</p>
        <p>{item.marca}</p>
        <p>${item.precio}</p>
      </div>
    </Link>
  );
};

export default Card;
