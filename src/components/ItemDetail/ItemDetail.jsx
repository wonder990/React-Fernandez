import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { useItemsContext } from "../../contexts/ItemsContext";

const ItemDetail = () => {
  const { items } = useItemsContext();

  const { cart, addItem } = useCartContext();

  const { itemid } = useParams();
  const [item, setitem] = useState({});

  useEffect(() => {
    const fn = async () => {
      const itemData = await getItemDetail();
      setitem(itemData);
    };

    fn();
  }, [items]);

  const [Quantity, setQuantity] = useState(1); // cambiar a quantity

  const onPlus = () => {
    if (Quantity >= 10) return;

    setQuantity(Quantity + 1);
  };

  const onMinus = () => {
    if (Quantity <= 1) return;

    setQuantity(Quantity - 1);
  };

  const onBuy = () => {
    setQuantity(1);
    addItem(item, Quantity);
  };

  const getItemDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.find((i) => i.id == itemid));
      }, 1000);
    });
  };

  if (item === undefined) return null;

  return (
    <div className="min-h-screen m-0">
      <div className="my-20 flex flex-col items-center lg:flex-row">
        <div className="w-full flex items-center flex-col lg:w-1/2">
          <img
            className="object-cover w-[90%] lg:w-[650px]"
            src={item.img}
            alt={item.name}
          />
          <div className="my-[25px] flex w-[200px] justify-between items-center border-solid border-2 border-black">
            <button
              className="text-orange-500 font-black text-3xl text-center w-1/3 p-2 border-none hover:scale-150"
              onClick={onMinus}
            >
              -
            </button>
            <span className="text-center w-1/3 font-bold">{Quantity}</span>
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
          <h3 className="font-bold text-3xl my-8 text-center sm:text-5xl">
            {item.name}
          </h3>
          <table className="2xl:w-[600px] xl:w-[550px] w-[90%]">
            <tbody>
              <tr className="h-auto">
                <td className="p-4 border-2 font-bold border-black text-center">
                  PANTALLA
                </td>
                <td className="p-4 text-sm border-2 border-black text-center">
                  {item.pantalla}
                </td>
              </tr>
              <tr className="h-20">
                <td className="p-4 border-2 font-bold border-black text-center">
                  PROCESADOR
                </td>
                <td className="p-4 text-sm border-2 border-black text-center">
                  {item.procesador}
                </td>
              </tr>
              <tr className="h-20">
                <td className="p-4 border-2 font-bold border-black text-center">
                  MEMORIA RAM
                </td>
                <td className="p-4 text-sm border-2 border-black text-center">
                  {item.mram}
                </td>
              </tr>
              <tr className="h-20">
                <td className="p-4 border-2 font-bold border-black text-center">
                  ALMACENAMIENTO
                </td>
                <td className="p-4 text-sm border-2 border-black text-center">
                  {item.almacenamiento}
                </td>
              </tr>
              <tr className="h-20">
                <td className="p-4 border-2 font-bold border-black text-center">
                  CAMARA TRASERA
                </td>
                <td className="p-4 text-sm border-2 border-black text-center">
                  {item.camaratrasera}
                </td>
              </tr>
              <tr className="h-20">
                <td className="p-4 border-2 font-bold border-black text-center">
                  CAMARA FRONTAL
                </td>
                <td className="p-4 text-sm border-2 border-black text-center">
                  {item.camaradelantera}
                </td>
              </tr>
              <tr className="h-20">
                <td className="p-4 border-2 font-bold border-black text-center">
                  BATERIA
                </td>
                <td className="p-4 text-sm border-2 border-black text-center">
                  {item.bateria}
                </td>
              </tr>
              <tr className="h-20">
                <td className="p-4 border-2 font-bold border-black text-center">
                  SISTEMA OPERATIVO
                </td>
                <td className="p-4 text-sm border-2 border-black text-center">
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
