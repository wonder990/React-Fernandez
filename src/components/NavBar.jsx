import CartWidget from "./CartWidget"

const NavBar = (props) => {
    return (
        <div className="bg-slate-400 flex justify-between content-center h-12">
            <a className="text-white text-xl font-bold mx-10 flex items-center" href="">AGON</a>
            <ul className="flex items-center">
                <li className="text-white font-medium mx-10"><a href="#">Accesorios</a></li>
                <li className="text-white font-medium mx-10"><a href="#">Sobre Nosotros</a></li>
                <li className="text-white font-medium mx-10"><a href="#">Descuentos</a></li>
            </ul>
            {props.children}
        </div>
    )
}

export default NavBar