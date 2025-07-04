import { CalendarDays, ChevronDown, MapPin, Navigation } from "lucide-react";
import { useEffect, useState } from "react";
import Card from "./Card";

interface Estacionamento {
  nome: string;
  local: string;
  data: string;
  preco: string;
  imagem: string;
}

const Section2 = () => {
  const [cards, setCards] = useState<Estacionamento[]>([]);

  useEffect(() => {
    fetch("/eventos.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);
  return (
    <div className=" mt-5 ">
      <div>
        <h2 className="font-bold md:text-4xl md:text-left text-center text-2xl mb-6">
          Eventos em destaque
        </h2>
        {/* Grid de cards estacionamentos */}
        <div className="gridcardshome grid grid-cols-1 lg:grid-cols-6  md:grid-cols-3 gap-7 items-center mb-20 md:grid-rows-2  overflow-hidden max-h-[calc(4*415px)] max-w-[300px] md:max-w-[100vw] mx-auto md:mx-0">
          {cards.map((card, index) => (
            <Card
              key={index}
              nome={card.nome}
              local={card.local}
              data={card.data}
              preco={card.preco}
              imagem={card.imagem}
            />
          ))}
        </div>
      </div>
      {/* Div de datas de eventos */}
      <div className="">
        <div>
          <h2 className="font-bold md:text-4xl md:text-left text-center text-2xl mb-2 whitespace-nowrap">
            Eventos próximos
          </h2>
          {/* Div filtros */}
          <div
            id="filtros"
            className="md:inline-flex gap-4 mb-4  items-center  select-none text-center flex overflow-x-auto scroll-smooth no-scrollbar  whitespace-nowrap w-[300px] sm:w-max mx-auto sm:mx-0"
          >
            <h3 className="bg-[#35ebff] p-2 px-3 rounded-full text-sm inline-flex md:w-auto cursor-pointer hover:bg-[#60c9d4] transition-all  mb-2 md:mb-0 group">
              <Navigation
                size={20}
                className="mr-2  min-w-4 group-hover:fill-black fill-transparent duration-300"
              />
              Usar minha localização
            </h3>
            <h3 className="bg-[#dbdbdb] p-2 px-3 rounded-full text-sm inline-flex  cursor-pointer hover:bg-[#b3b3b3] transition-all mb-2 md:mb-0">
              <MapPin size={20} className="mr-2  min-w-4" />
              Qualquer lugar
              <ChevronDown size={20} className="min-w-4" />
            </h3>
            <h3 className="bg-[#dbdbdb] p-2 px-3 rounded-full text-sm inline-flex  cursor-pointer hover:bg-[#b3b3b3] transition-all mb-2 md:mb-0">
              <CalendarDays size={20} className="mr-2  min-w-4" />
              Qualquer data
              <ChevronDown size={20} className="min-w-4" />
            </h3>
          </div>
        </div>
        {/* Cards de datas */}
        <div className="flex flex-col md:flex-row gap-7 items-center mb-20 ">
        <div className="gridcardshome grid grid-cols-1 lg:grid-cols-6  md:grid-cols-3 gap-7 items-center mb-20 md:grid-rows-2  overflow-hidden max-h-[calc(4*415px)] max-w-[300px] md:max-w-[100vw] mx-auto md:mx-0">
            {cards.map((card, index) => (
              <Card
                key={index}
                nome={card.nome}
                local={card.local}
                data={card.data}
                preco={card.preco}
                imagem={card.imagem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
