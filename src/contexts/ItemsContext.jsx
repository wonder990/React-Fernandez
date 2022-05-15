import { createContext, useContext, useEffect, useState } from "react";
import { getItems } from "../components/ItemListContainer/getItems";

const ItemsContext = createContext()

export const ItemsProvider = ( {children} ) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      getItems()
        .then((result) => setItems(result))
        .catch((error) => console.log(error))       
    }, []);

    return (
        <ItemsContext.Provider value={{items:items}}>
            {children}
        </ItemsContext.Provider>
    )
}
export const useItemsContext = () => useContext(ItemsContext)