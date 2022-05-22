import ItemsCollection from "../shop/ItemCollection";

const ItemListContainer = () => {
  return (
    <div className="bg-slate-100 min-h-screen sm:px-[50px] py-12 justify-center flex flex-wrap">
      <ItemsCollection />
    </div>
  );
};

export default ItemListContainer;
