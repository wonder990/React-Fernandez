const NavBar = () => {
    return (
        <div className="font-sans bg-black flex justify-between content-center h-14">
            <a className="text-white text-xl font-bold mx-12 flex items-center" href="">AGON</a>
            <ul className="flex items-center">
                <li className="text-white font-medium mx-10"><a href="#">Accesorios</a></li>
                <li className="text-white font-medium mx-10"><a href="#">Sobre Nosotros</a></li>
                <li className="text-white font-medium mx-10"><a href="#">Descuentos</a></li>
            </ul>
            <a className="flex items-center mx-12 my-5" href="#">
                <i class="text-white fa-solid fa-cart-shopping"></i>
            </a>
        </div>
    )
}


export default NavBar