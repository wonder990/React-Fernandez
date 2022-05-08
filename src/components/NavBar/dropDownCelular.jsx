import { Link } from "react-router-dom"
import { itemsData } from "../ItemListContainer/ItemsData"

const DropDownCelular = () => {
    return (
        <>
        <div className="group inline-block relative">
        <Link to={"/productos"} className="font-medium px-10 py-3 text-white inline-flex items-center">
          <a href="#"className="w-full mr-1"> CELULARES</a>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </Link>
        {/* <ul className="absolute hidden w-full text-gray-700 pt-1 group-hover:block">
          <a className="text-center">
            <a
              className="font-bold rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >SAMSUNG</a>
          </a>
          <a className="text-center">
            <a
              className="font-bold bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >XIAOMI</a>
          </a>
          <a className="text-center">
            <a
              className="font-bold rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >IPHONE</a>
          </a>
        </ul> */}
        </div>
        </>
    )
}

export default DropDownCelular


