import Categorias from "./Categorias";
import HomeSlider from "./HomeSlider";
import Passos from "./Passos";



const HeroSection = () => {
  const mySlides = [
    { image: "/sliderimages/slide-0.png", title: "Rock Legends Festival", url:"/evento/1"},
    { image: "/sliderimages/slide-1.png", title: "Rock in Rio", url:"/evento/1" },
  ];

  return (
    <div id="top" className="max-w-[97%] mx-auto  pt-25">
      <div className="herosection w-full mx-auto mb-0  flex items-center">
        <div className="flex flex-col md:flex-row w-full gap-8">
          {/* Div texto */}
          <div className="flex flex-col justify-center flex-1">
            <h1 className="text-4xl md:text-6xl lg:text-6xl mb-4 md:mb-6 md:leading-18">
              Encontre{" "}<br/>
              <span className="font-bold bg-[#FF6900] px-2 rounded-xl">
                os principais eventos
              </span>
            </h1>
            <input
              type="text"
              className="border-1 rounded p-2"
              placeholder="Busque por Evento, Artista, Local..."
            ></input>
          </div>
          {/* Div imagem */}
          <div className="flex-1 flex items-center justify-center max-w-[900px] min-w-10 select-none">
           < HomeSlider slides={mySlides}/>
          </div>
        </div>
      </div>
      <Categorias />
      <div>
        <Passos />
      </div>
    </div>
  );
};

export default HeroSection;
