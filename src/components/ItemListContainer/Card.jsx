import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="overflow-hidden flex items-center flex-col border-black border-2 w-64 m-6 hover:text-white hover:bg-black duration-500">
      <Link
        className="text-center w-full overflow-hidden duration-700 hover:bg-orange-600 hover:scale-110"
        to={`/productos/${item.id}`}
      >
        <img className="my-6 h-56" src={item.img} alt={item.name} />
      </Link>
      <div className="overflow-hidden text-base font-bold mt-2 border-t-2 w-full h-24 justify-center border-black flex flex-col items-center">
        <p>{item.name}</p>
        <p>{item.marca}</p>
        <p>${item.precio}</p>
      </div>
    </div>
  );
};

export default Card;
