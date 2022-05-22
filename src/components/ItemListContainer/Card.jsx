import { Link } from "react-router-dom";

const Card = ({ e }) => {
  return (
    <Link
      to={`/productos/${e.id}`}
      className="bg-white shadow-lg shadow-gray-500 rounded-lg overflow-hidden flex items-center flex-col  w-64 m-6 hover:text-white hover:bg-amber-200 duration-500"
    >
      <div className="w-full overflow-hidden duration-700 hover:scale-110">
        <img className="mx-auto my-6 h-56" src={e.img} alt={e.name} />
      </div>
      <div className="bg-neutral-800 text-white overflow-hidden text-base font-bold mt-2 border-t-2 w-full h-24 justify-center border-black flex flex-col items-center">
        <p>{e.name}</p>
        <p>{e.marca}</p>
        <p>${e.precio}</p>
      </div>
    </Link>
  );
};

export default Card;
