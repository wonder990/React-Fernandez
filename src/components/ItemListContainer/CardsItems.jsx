import Card from "./Card"
const CardsItems = ({item}) => {
    return (
        <div className="min-h-screen mx-10 my-12 justify-center flex flex-wrap">
            {item.map( (items) => 
                <Card key={items.id} item={items}/>
             )}
        </div>
    )
}

export default CardsItems