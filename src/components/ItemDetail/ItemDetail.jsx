import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { useItemsContext } from "../../contexts/ItemsContext";

const ItemDetail = () => {
  const { items, ModDark } = useItemsContext();

  const { addItem } = useCartContext();

  const { itemid } = useParams();
  const [item, setitem] = useState({});

  useEffect(() => {
    const fn = async () => {
      const itemData = await getItemDetail();
      setitem(itemData);
    };

    fn();
  }, [items]);

  const [Quantity, setQuantity] = useState(1);

  const onPlus = () => {
    if (Quantity >= 10) return;

    setQuantity(Quantity + 1);
  };

  const onMinus = () => {
    if (Quantity <= 1) return;

    setQuantity(Quantity - 1);
  };

  const onBuy = () => {
    addItem(item, Quantity);
  };

  const getItemDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.find((i) => i.id == itemid));
      }, 1000);
    });
  };
  console.log(item);

  if (item === undefined)
    return (
      <div>
        <h1>asd</h1>
      </div>
    );

  return (
    <div
      className={
        ModDark
          ? "duration-500 min-h-screen m-0"
          : "duration-500 bg-slate-900 min-h-screen m-0"
      }
    >
      <div className="py-20 flex flex-col items-center lg:flex-row">
        <div className="w-full flex items-center flex-col lg:w-1/2">
          <img
            className="object-cover w-[90%] sm:w-auto sm:max-h-[400px]"
            src={item.img}
            alt={item.name}
          />
          <div className="flex flex-col mt-[20px] mb-[20px] w-auto px-[20px]">
            <span className="text-[17px] text-green-500 font-semibold">
              <i className="pr-4 fa-solid fa-truck"></i>
              Envío gratis a todo el país
            </span>
            <p className="ml-[33px] text-[15px] text-stone-500">
              Conocé los tiempos y las formas de envío.
            </p>
            <span className="text-[17px] text-green-500 font-semibold">
              <i class="pr-4 fa-solid fa-arrow-rotate-left"></i>
              Devolución gratis
            </span>
            <p className="ml-[33px] text-[15px] text-stone-500">
              Tenés 30 días desde que lo recibís.
            </p>
          </div>
          <div
            className={
              ModDark
                ? "my-[25px] flex w-[200px] justify-between items-center border-solid border-2 border-black"
                : "my-[25px] flex w-[200px] justify-between items-center border-solid border-2 border-white"
            }
          >
            <button
              className="text-orange-500 font-black text-3xl text-center w-1/3 p-2 border-none hover:scale-150"
              onClick={onMinus}
            >
              -
            </button>
            <span
              className={
                ModDark
                  ? "text-center w-1/3 font-bold"
                  : "text-white text-center w-1/3 font-bold"
              }
            >
              {Quantity}
            </span>
            <button
              className="text-orange-500 text-2xl font-extrabold text-center w-1/3 p-2 border-none hover:text-3xl"
              onClick={onPlus}
            >
              +
            </button>
          </div>
          <button
            className="duration-500 w-[200px] h-[50px] rounded bg-amber-600 text-xl text-white hover:bg-amber-700 "
            onClick={onBuy}
          >
            Añadir al carrito
          </button>
          <Link to="/productos">
            <button className="m-[20px] w-[200px] h-[50px] text-xl bg-orange-500 text-white rounded hover:bg-amber-700 duration-500">
              Seguir Comprando
            </button>
          </Link>
        </div>
        <div className="w-[90%] flex items-center flex-col lg:w-1/2">
          <h3
            className={
              ModDark
                ? "font-bold text-3xl my-8 text-center sm:text-5xl"
                : "text-white font-bold text-3xl my-8 text-center sm:text-5xl"
            }
          >
            {item.name}
          </h3>
          <table className="2xl:w-[600px] xl:w-[550px] w-[90%]">
            <tbody>
              <tr className="h-auto">
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  PANTALLA
                </td>
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  {item.pantalla}
                </td>
              </tr>
              <tr className="h-20">
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  PROCESADOR
                </td>
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  {item.procesador}
                </td>
              </tr>
              <tr className="h-20">
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  MEMORIA RAM
                </td>
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  {item.mram}
                </td>
              </tr>
              <tr className="h-20">
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  ALMACENAMIENTO
                </td>
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  {item.almacenamiento}
                </td>
              </tr>
              <tr className="h-20">
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  CAMARA TRASERA
                </td>
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  {item.camaratrasera}
                </td>
              </tr>
              <tr className="h-20">
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  CAMARA FRONTAL
                </td>
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  {item.camaradelantera}
                </td>
              </tr>
              <tr className="h-20">
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  BATERIA
                </td>
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  {item.bateria}
                </td>
              </tr>
              <tr className="h-20">
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  SISTEMA OPERATIVO
                </td>
                <td
                  className={
                    ModDark
                      ? "p-4 border-2 font-bold border-black text-center"
                      : "p-4 border-2 font-bold border-white text-center text-white"
                  }
                >
                  {item.sop}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
