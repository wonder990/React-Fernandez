import React from "react";

const FormCart = () => {
  return (
    <div className="hidden bg-black/[.8] top-0 absolute min-h-screen flex items-center justify-center w-full">
      <div className="relative w-[400px] bg-slate-800 flex justify-center">
        <form
          action="datos.jsx"
          className="flex flex-col w-[350px] mx-auto pt-[30px] pb-[50px]"
        >
          <label htmlFor="" for="nombre" className="text-white py-4">
            Nombre
          </label>
          <input type="text" id="nombre" />
          <label htmlFor="" for="apellido" className="text-white py-4">
            Apellido
          </label>
          <input type="text" id="apellido" />
          <label htmlFor="" for="email" className="text-white py-4">
            Email
          </label>
          <input type="email" id="email" />
          <label htmlFor="" for="nombre" className="text-white py-4">
            Direccion de domicilio
          </label>
          <input type="text" id="nombre" />
        </form>
      </div>
    </div>
  );
};

export default FormCart;
