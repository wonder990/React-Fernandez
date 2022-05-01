import Item from "./Item"
const CardItems = ({item}) => {
    return (
        <div className="m-20 justify-center flex flex-wrap m-0">
            {item.map( (items) => 
                <Item key={items.id} item={items}/>
             )}
        </div>
    )
}

export default CardItems