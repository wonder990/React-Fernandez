import React, { useEffect, useState } from "react"
import CardsItems  from "./CardsItems";
import { getItems } from "./getItems"

const ItemListContainer = () => {
    const [item, setItems] = useState([]);
    useEffect(() => {
      getItems()
        .then((result) => setItems(result))
        .catch((error) => console.log(error))       
    }, []);

    return (
        <>
            <CardsItems item={item} />          
        </>
    )
}

export default ItemListContainer