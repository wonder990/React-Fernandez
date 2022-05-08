import { Link } from "react-router-dom"
import DropDownCelular from "./dropDownCelular"


const NavBar = () => {
    return (
        <div className="font-sans bg-black flex justify-between content-center h-14">
            <Link to='/' className="text-white text-xl font-bold mx-12 flex items-center">
                <a  href="">AGON</a>
            </Link>
            <ul className="flex items-center">
                <DropDownCelular li='MARCA'/>
                <Link to='/' className="text-white font-medium px-10">SOBRE NOSOTROS</Link>
                <Link to='/descuentos' className="text-white font-medium px-10">DESCUENTOS</Link>
            </ul>
            <a className="flex items-center mx-12 my-5" href="#">
                <i class="text-white fa-solid fa-cart-shopping"></i>
            </a>
        </div>
    )
}


export default NavBar