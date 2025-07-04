import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Link } from "react-router-dom";

interface SlideData {
  image: string;
  title: string;
  url:string;
}
interface SwiperSliderProps {
  slides: SlideData[];
}

export default function SwiperSlider({ slides }: SwiperSliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
      loop={true}
      grabCursor={true}
      slidesPerView={1}
      navigation
      speed={1000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="h-100 max-h-45 md:max-h-[100%] flex-1 min-w-10 rounded-xl relative  select-none border-1 border-gray-300 shadow-md"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <img
            src={slide.image}
            alt={`slide-${i}`}
            className="w-full h-full object-cover"
          />
          <Link to={slide.url} title="Ver evento">
            <h2 className="absolute py-1.5 px-3 bg-[rgba(0,0,0,0.7)] top-3 left-3 font-bold text-white rounded-lg">
              {slide.title}
            </h2>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
