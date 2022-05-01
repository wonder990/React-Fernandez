import React, { useEffect, useState } from "react"
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/Footer";
import CardItems  from "./CardsItems";
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
            <NavBar/>
            <CardItems item={item} />
            <Footer/>
            
        </>
    )
}

export default ItemListContainer