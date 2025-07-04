import { Search } from "lucide-react";

const DescubraSection = () => {
  return (
    <div className="text-center bg-[#ff7300] flex flex-col py-15 justify-center ">
      <h3 className="font-bold text-3xl p-4 md:p-0 md:text-4xl mb-5">
        Descubra outras opções disponíveis!
      </h3>
      <div className="relative w-fit mx-auto">
      <Search size={20} className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer"/>
      <input type="text" placeholder="Busque por Evento, Artista, Local..." className="bg-gray-100 w-[30rem] max-w-[20rem] p-2 rounded-lg inline-block mx-auto focus:outline-2"></input>
     </div>
    </div>
  );
};

export default DescubraSection;
