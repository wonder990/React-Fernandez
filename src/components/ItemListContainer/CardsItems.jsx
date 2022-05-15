import { useItemsContext } from "../../contexts/ItemsContext"
import Card from "./Card"

const CardsItems = () => {
    const {items} = useItemsContext()
    return (
        <div className="min-h-screen mx-10 my-12 justify-center flex flex-wrap">
            {items.map( (items) => 
                <Card key={items.id} item={items}/>
             )}
        </div>
    )
}

export default CardsItems