import "../App.css";
import HomeSlider from "../components/HomeSlider";

import {
  CalendarDays,
  Clock,
  Heart,
  MapPin,
  Share2,
  ShoppingCart,
  Users,
} from "lucide-react";
import MapaDescricaoLateral from "../components/MapaDescricaoLateral";

export default function EventPage() {

  const mySlides = [
    { image: "/rockinrio.png", title: "Rock in Rio", url:"/evento/1"},
  ];
const localEvento = "Parque de Exposições Governador Ney Braga Avenida Tiradentes, 6275 - Londrina, PR, Brasil"
const descricaoEvento = "O Rock Legends Festival reúne alguns dos maiores nomes do gênero para um evento épico e repleto de música boa. De lendas imortais como Deep Purple, Scorpions e Aerosmith às bandas que mantêm a chama acesa, como Whitesnake e Journey."
const organizadorEvento = "Rock Legends"
  return (
    <div id="topproductpage" className="max-w-screen flex flex-col mt-30 mb-30">
      {/* Div Das Informações do Topo (imagem, preço, etc) */}
      <div className="lg:mx-35 flex md:flex-row flex-col justify-between items-center gap-5">
        {/* Div da Imagem */}
        <div className="w-200 max-w-[100%] min-w-80 flex-1">
          <HomeSlider slides={mySlides}/>
        </div>
        {/* Div das info PREÇOS ETC */}
        <div className="md:mt-0 mt-5 flex-col flex border-1 border-gray-400 p-5 rounded-xl md:h-100 justify-around lg:px-10">
          <div className="md:block  gap-4 items-center">
            <h2 className="font-bold text-2xl">R$500,00</h2>
            <h2 className="text-sm ">POR VIT!</h2>
          </div>
          {/* Div pra deixar texto cinza */}
          <div className="mt-5 text-gray-500">
            <h2>
              <span className="font-bold">Localização: </span>Rua das Palmeiras,
              123 - Centro
            </h2>
            <h2>
              <span className="font-bold">Tipo de vaga: </span>Coberto
            </h2>
            <h2>
              <span className="font-bold">Horário: </span>18:00 - 23:00
            </h2>
          </div>
          {/* Div botões + favoritar/compartilhar */}
          
          {/* DIV Botões */}
          <div className="flex gap-2 mt-6 justify-between">
            <button className="bg-[#FF7300] hover:bg-[#c04d00] rounded-lg w-[100%] duration-300 hover:border-black border-1 border-transparent cursor-pointer font-bold">
              Comprar agora
            </button>
            <button
              className="bg-[#FFF] border-1 border-gray-500 rounded-lg p-4 cursor-pointer transition-all  hover:bg-[#dfdfdf] group"
              title="Adicionar ao carrinho"
            >
              <ShoppingCart className="fill-white duration-200 group-hover:fill-black"/>
            </button>
          </div>
          {/* Div de favoritar e compartilhar */}
          <div className="justify-around inline-flex flex-row mt-5 font-bold">
            <button className="inline-flex gap-2 group cursor-pointer">
              <div className="shrink-0">
                <Heart className="fill-white duration-200 group-hover:fill-red-600" />
              </div>
              <div className="lg:flex md:hidden">Favoritar</div>
            </button>
            <button className="inline-flex gap-2 group cursor-pointer">
              <div className="shrink-0">
                <Share2 className="fill-white group-hover:fill-black duration-200"/>
              </div>
              <div className="lg:flex md:hidden">Compartilhar</div>
            </button>
          </div>
        </div>
      
      </div>
      {/* Div das informações abaixo do topo (Título do evento, etc.) */}
      <div className="lg:mx-35 mt-5 flex-col flex">
        <h2 className="text-2xl font-bold">Rock in Rio - 2025</h2>
        {/* Div das informações com ícones */}
        <div className="md:inline-flex md:flex-row md:gap-7 flex flex-col mt-2 select-none">
          <span className="inline-flex gap-2 items-center">
            <CalendarDays size={18} /> Data: 15/03/2025
          </span>
          <span className="inline-flex gap-2 items-center">
            <Clock size={18} />
            Horário: 18:00 - 03:00
          </span>
          <span className="inline-flex gap-2 items-center">
            <MapPin size={18} /> Local: Arena São Paulo
          </span>
          <span className="inline-flex gap-2 items-center">
            <Users size={18} /> Capacidade: 5000 pessoas
          </span>
        </div>
        {/* Div das tags */}
        <div className="flex flex-row  gap-3 font-bold mt-3  max-w-screen text-nowrap flex-1 overflow-auto no-scrollbar items-center select-none ">
          <span className="px-3 py-1 bg-[#ff7b00] rounded-xl text-white text-sm  inline-block ">
            Rock
          </span>
          <span className="px-3 py-1 bg-[#ff7b00] rounded-xl text-white text-sm">
            Festival
          </span>
          <span className="px-3 py-1 bg-[#ff7b00] rounded-xl text-white text-sm">
            Música ao vivo
          </span>
          <span className="px-3 py-1 bg-[#ff7b00] rounded-xl text-white text-sm">
            Open Bar
          </span>
        </div>
        
      </div>
      <MapaDescricaoLateral titulomapa="Mapa do Evento" descricao={descricaoEvento} local={localEvento} organizador={organizadorEvento}/>
    
    </div>
  );
}
