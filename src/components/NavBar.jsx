import React from 'react'
const NavBar = () => {
    return (
    <div className="flex justify-between relative bg-white">
      <a className='mx-10 my-3 text-lg italic font-medium' href="#">AGON</a>
      <ul className='flex'>
        <li className='mx-5 my-3 font-medium'><a href='#'>Accesorios</a></li>
        <li className='mx-5 my-3 font-medium'><a href="#">Sobre Nosotros</a></li>
        <li className='mx-5 my-3 font-medium'><a href=""> Ofertas</a></li>
      </ul>

      <a className='mx-10 my-3'>
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
      
    </div>

    )
}

export default NavBar 

