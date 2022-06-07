import React from "react";
import { useItemsContext } from "../../contexts/ItemsContext";

const Contacto = () => {
  const { ModDark } = useItemsContext();

  return (
    <div
      className={
        ModDark
          ? "items-center bg-slate-100 duration-500 min-h-screen sm:px-[50px] py-12 justify-center flex flex-wrap"
          : "items-center bg-slate-900 duration-500 min-h-screen sm:px-[50px] py-12 justify-center flex flex-wrap"
      }
    >
      <div className="w-[500px]">
        <form
          className={
            ModDark
              ? "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mb-4 bg-white"
              : "bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 mb-4 bg-white"
          }
        >
          <div className="mb-4">
            <label
              className={
                ModDark
                  ? "block text-gray-700 text-sm font-bold mb-2"
                  : "text-white block text-sm font-bold mb-2"
              }
              for="username"
            >
              Nombre de usuario
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className={
                ModDark
                  ? "block text-gray-700 text-sm font-bold mb-2"
                  : "text-white block text-sm font-bold mb-2"
              }
              for="password"
            >
              Contraseña
            </label>
            <input
              required
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Enviar
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contacto;
