import CartWidget from "./CartWidget"

const NavBar = (props) => {
    return (
        <div className="bg-slate-400 flex justify-between">
            <a className="text-white text-xl font-bold mx-10 my-5" href="">AGON</a>
            <ul className="flex">
                <li className="text-white font-medium mx-10 my-5"><a href="#">Accesorios</a></li>
                <li className="text-white font-medium mx-10 my-5"><a href="#">Sobre Nosotros</a></li>
                <li className="text-white font-medium mx-10 my-5"><a href="#">Descuentos</a></li>
            </ul>
            {props.children}
        </div>
    )
}

export default NavBar