import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { itemsData } from "../ItemListContainer/ItemsData"

const ItemDetail = () => {
    const{itemid} = useParams()
    const [item, setitem] = useState( {} )

    useEffect(() => {

        const fn = async () => {
            const itemData = await getItemDetail() 
            setitem(itemData)
        }
    
        fn()

    }, [])

    const getItemDetail = () => {
        return new Promise( (resolve) => {
            setTimeout( () => {
                resolve(itemsData.find( i => i.id == itemid ))
            }, 1000)
        } )
    }

  return (
    <div className="min-h-screen w-full flex justify-center">
        <div className="my-20 flex justify-center flex-wrap">
            <img className="mt-8 w-1/2 max-h-96" src={item.img} alt="" />
            <div className="w-1/2">
                <h3 className="font-bold text-xl m-8 text-center">{item.name}</h3>
                <table className="w-96">
                    <tr className="h-20">
                        <td className="p-4 border-2 font-bold border-black text-center">PANTALLA</td>
                        <td className="p-4 text-sm border-2 border-black text-center">{item.pantalla}</td>
                    </tr>
                    <tr className="h-20">
                        <td className="p-4 border-2 font-bold border-black text-center">PROCESADOR</td>
                        <td className="p-4 text-sm border-2 border-black text-center">{item.procesador}</td>
                    </tr>
                    <tr className="h-20">
                        <td className="p-4 border-2 font-bold border-black text-center">MEMORIA RAM</td>
                        <td className="p-4 text-sm border-2 border-black text-center">{item.mram}</td>
                    </tr>
                    <tr className="h-20">
                        <td className="p-4 border-2 font-bold border-black text-center">ALMACENAMIENTO</td>
                        <td className="p-4 text-sm border-2 border-black text-center">{item.almacenamiento}</td>
                    </tr>
                    <tr className="h-20">
                        <td className="p-4 border-2 font-bold border-black text-center">CAMARA TRASERA</td>
                        <td className="p-4 text-sm border-2 border-black text-center">{item.camaratrasera}</td>
                    </tr>
                    <tr className="h-20">
                        <td className="p-4 border-2 font-bold border-black text-center">CAMARA FRONTAL</td>
                        <td className="p-4 text-sm border-2 border-black text-center">{item.camaradelantera}</td>
                    </tr>
                    <tr className="h-20">
                        <td className="p-4 border-2 font-bold border-black text-center">BATERIA</td>
                        <td className="p-4 text-sm border-2 border-black text-center">{item.bateria}</td>
                    </tr>
                    <tr className="h-20">
                        <td className="p-4 border-2 font-bold border-black text-center">SISTEMA OPERTAIVO</td>
                        <td className="p-4 text-sm border-2 border-black text-center">{item.sop}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail