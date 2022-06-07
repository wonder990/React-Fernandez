import React, { useEffect } from "react";
import Card from "../ItemListContainer/Card";
import { useItemsContext } from "../../contexts/ItemsContext";

const ItemsCollection = () => {
  const { items, ItemProduct } = useItemsContext();

  const productFilter = (element) => {
    if (element === undefined) return items;
    let products = items.filter((e) => e.marca.toLowerCase() === element);
    return products;
  };
  console.log(productFilter(ItemProduct));

  return (
    <>
      {productFilter(ItemProduct).map((e) => (
        <Card key={e.id} item={e} />
      ))}
    </>
  );
};

export default ItemsCollection;
