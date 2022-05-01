const Item = ({item}) => {
    return (
        <div className="overflow-hidden flex items-center flex-col border-black border-2 w-64 m-6">
            <img className="my-6 hover:scale-110 h-56 duration-700" src={item.img} alt={item.name} />
            <div className="text-base font-bold mt-2 border-t-2 w-full h-24 justify-center border-black flex flex-col items-center">
                <p>{item.name}</p>
                <p>${item.precio}</p>
            </div>
        </div>
    )
}

export default Item