const ItemListContainer = (props) => {
    return (
        <div className="min-h-screen flex place-content-center items-center">
            <h1 className="text-4xl text-center font-serif">hola {props.name}</h1>
        </div>
    )
}

export default ItemListContainer