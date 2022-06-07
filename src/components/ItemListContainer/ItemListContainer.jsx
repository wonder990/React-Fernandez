import { useItemsContext } from "../../contexts/ItemsContext";
import ItemsCollection from "../shop/ItemCollection";

const ItemListContainer = () => {
  const { ModDark } = useItemsContext();

  return (
    <div
      className={
        ModDark
          ? "bg-slate-100 duration-500 min-h-screen sm:px-[50px] py-12 justify-center flex flex-wrap"
          : "bg-slate-900 duration-500 min-h-screen sm:px-[50px] py-12 justify-center flex flex-wrap"
      }
    >
      <ItemsCollection />
    </div>
  );
};

export default ItemListContainer;
