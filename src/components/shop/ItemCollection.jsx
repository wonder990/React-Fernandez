import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import Card from "../ItemListContainer/Card";
import { useItemsContext } from "../../contexts/ItemsContext";

const ItemsCollection = () => {
  const { items, getItemsShop } = useItemsContext();
  // const [items, setitems] = useState([]);

  useEffect(() => {
    getItemsShop();
  }, []);

  // const getItemsShop = () => {
  //   const db = getFirestore();
  //   const itemCollection = collection(db, "items");
  //   getDocs(itemCollection).then((snapshot) => {
  //     if (snapshot.size > 0) {
  //       const ids = snapshot.docs.map((d) => d.id).join(",");
  //       console.log("ids: ", ids);

  //       const itemsData = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  //       setitems(itemsData);
  //     }
  //   });
  // };

  return (
    <>
      {items.map((e) => (
        <Card key={e.id} e={e} />
      ))}
    </>
  );
};

export default ItemsCollection;
