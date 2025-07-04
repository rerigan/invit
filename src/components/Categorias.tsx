import { useRef, useState } from "react";
import {
  ChefHat,
  CircleArrowLeft,
  CircleArrowRight,
  Drama,
  GraduationCap,
  Laugh,
  MicVocal,
  Volleyball,
} from "lucide-react";
import MiniCard from "./MiniCard";

const Categorias = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const scrollAmount = 222;

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const newScroll =
      direction === "left" ? scrollX - scrollAmount : scrollX + scrollAmount;

    // Limitar rolagem para não ultrapassar os limites
    const maxScroll = container.scrollWidth - container.clientWidth;
    const clampedScroll = Math.max(0, Math.min(newScroll, maxScroll));

    setScrollX(clampedScroll);
    container.scrollTo({
      left: clampedScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-5  select-none">
      <div className="text-center md:text-left mb-5">
        <h2 className="font-bold md:text-3xl mb-2">Categorias</h2>
        <h2 className="md:text-xl">
          Encontre o evento em que deseja estacionar
        </h2>
      </div>

      {/* Carrossel */}
      <div className="flex items-center relative">
        <CircleArrowLeft
          size={30}
          strokeWidth={1.5}
          className="cursor-pointer z-10 min-w-[30px]"
          onClick={() => handleScroll("left")}
        />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar mx-auto"
        >
          <div className="mx-10 flex gap-10">
            <div className=" min-w-[160px]">
              <MiniCard link="#top" icon={MicVocal} text="Festas e Shows" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard link="" icon={Laugh} text="Stand-up" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard link="" icon={Drama} text="Teatro e Cinema" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard link="" icon={Volleyball} text="Esportes" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard link="" icon={ChefHat} text="Gastronomia" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard link="" icon={GraduationCap} text="Workshops" />
            </div>
          </div>
        </div>

        <CircleArrowRight
          size={30}
          strokeWidth={1.5}
          className="cursor-pointer z-10 min-w-[30px]"
          onClick={() => handleScroll("right")}
        />
      </div>
    </div>
  );
};

export default Categorias;
