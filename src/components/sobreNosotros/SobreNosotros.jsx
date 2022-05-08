import Carrousel from "./componentes/carrousel"


const SobreNosotros = () => {
    return ( 
        <div className=" my-16 flex items-center flex-col">
            <Carrousel/>
            <div className="flex items-center flex-col w-2/4">
                <h3 className="font-medium font-sans my-10 text-4xl">AGON</h3>
                <p className="my-10 font-sans text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex velit voluptas, ipsa architecto rem cumque? Eum rerum sit nisi aliquid voluptatem, cumque minima voluptate vitae alias doloremque? Error, excepturi laborum.</p>
            </div>
        </div>
    )
}

export default SobreNosotros