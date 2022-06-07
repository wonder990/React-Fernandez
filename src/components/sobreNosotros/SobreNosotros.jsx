import { useItemsContext } from "../../contexts/ItemsContext";

const SobreNosotros = () => {
  const { ModDark } = useItemsContext();

  return (
    <div className="bg-[url('https://fs.npstatic.com/userfiles/7687254/image/MIUI_Super_Wallpapers-w810h462.jpg')] bg-opacity-50 bg-cover bg-fixed h-screen flex items-center flex-col">
      <main className="bg-black/50 h-full w-full flex items-center flex-col">
        <article className="h-[700px] w-full text-center flex flex-col justify-center items-center">
          <h3 className="text-center lg:w-1/2 lg:ml-[50%] font-medium font-sans my-10 text-[80px] text-white px-[10px] sm:px-[30px]">
            AGON
          </h3>
          <p className="text-center lg:w-1/2 lg:ml-[50%] text-white my-10 font-sans text-[20px] px-[10px] sm:px-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id
            blanditiis sunt. Pariatur exercitationem consequuntur doloribus
            voluptas quasi! Minima assumenda earum sint error nesciunt repellat,
            nostrum aliquam unde eligendi tenetur.
          </p>
        </article>
        <article
          className={
            ModDark
              ? "duration-300 flex flex-col items-center justify-center bg-slate-100 mini-h-[350px] lg:p-[100px]"
              : "duration-300 flex flex-col items-center justify-center bg-slate-800 mini-h-[350px] lg:p-[100px] text-white"
          }
        >
          <p className="text-center text-[18px] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            delectus molestias rem neque explicabo consequuntur nobis unde earum
            veritatis vel nemo nulla facere dolores, officia culpa quasi
            aspernatur facilis necessitatibus dicta nihil, minus animi? Magni
            repellendus sint, assumenda hic eius minima labore tempora veniam a
            sed non illo autem officia veritatis nihil ipsa reiciendis facere
            dolores. Officia voluptas, totam alias, repellat cupiditate
            consectetur quasi similique animi aperiam facilis quaerat deserunt
            harum dolores ullam nam inventore, eveniet voluptate. Quam ipsam
            aspernatur nemo quis quia cum error quae inventore optio quod a
            facere, dolore eaque culpa doloremque tempora. Nemo hic animi
            corrupti!
          </p>
        </article>
      </main>
    </div>
  );
};

export default SobreNosotros;
