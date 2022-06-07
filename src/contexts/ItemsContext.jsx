import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [ModDark, setModDark] = useState(true);
  const Bg = () => {
    setModDark(!ModDark);
  };
  useEffect(() => {
    getItemsShop();
  }, []);

  const [ItemProduct, setItemProduct] = useState("");
  const [items, setitems] = useState([]);

  const getItemsShop = () => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    getDocs(itemCollection).then((snapshot) => {
      if (snapshot.size > 0) {
        const ids = snapshot.docs.map((d) => d.id).join(",");
        console.log("ids: ", ids);

        const itemsData = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setitems(itemsData);
      }
    });
  };

  return (
    <ItemsContext.Provider
      value={{
        items: items,
        getItemsShop,
        ModDark,
        Bg,
        ItemProduct,
        setItemProduct,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
export const useItemsContext = () => useContext(ItemsContext);
