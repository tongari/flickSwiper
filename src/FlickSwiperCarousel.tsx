// Flick comparison between translateX and scrollLeft (React)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

export const FlickSwiperCarousel = () => {
  // スライド画像の配列を定義
  const slides = [
    { src: "/img/1114_water_hamon_9514.jpg", alt: "スライド1" },
    {
      src: "/img/aerial-shot-megapolis-with-illuminated-high-buildings.jpg",
      alt: "スライド2",
    },
    { src: "/img/beautiful-rainbow-nature.jpg", alt: "スライド3" },
    {
      src: "/img/pexels-ryutaro-tsukata-6249250.jpeg",
      alt: "スライド4",
    },
    {
      src: "/img/photo-1718287888958-efa8b9c8375a.jpeg",
      alt: "スライド5",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="carousel-container"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="carousel-slide">
          <img src={slide.src} alt={slide.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
