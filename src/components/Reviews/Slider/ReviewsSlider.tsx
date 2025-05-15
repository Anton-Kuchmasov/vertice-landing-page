import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ReviewsSlider.scss";

const reviewsContent: ReviewCardType[] = [
  {
    text: "Al principio no sabía nada de trading, pero con los videos de YouTube y el robot, todo cambió. Ahora tengo una forma más clara de operar y ¡ya empiezo a ver resultados! Me siento mucho más seguro con las estrategias que enseñas.",
    name: "Juan Pérez",
    avatar: "./images/avatars/juan-perez.png",
  },
  {
    text: "Empecé a seguir el canal de YouTube y me sorprendió la claridad con la que explicas todo. El robot que usas hace que las decisiones sean más fáciles, y el aprendizaje es super accesible. ¡Recomiendo 100%!",
    name: "Mariana López",
    avatar: "./images/avatars/mariana-lopez.png",
  },
  {
    text: "Pensé que el trading era complicado, pero después de usar el robot y ver las lecciones en YouTube, todo se volvió mucho más sencillo. ¡Estoy ganando confianza y resultados gracias a las estrategias que compartes!",
    name: "Roberto Martínez",
    avatar: "./images/avatars/roberto-martinez.png",
  },
  {
    text: "No estaba segura si debía confiar en un robot para operar, pero después de ver cómo funciona el sistema y aprender a usarlo en el canal, ¡fue una gran decisión! Me siento mucho más preparada para operar por mi cuenta.",
    name: "Patricia Rodríguez",
    avatar: "./images/avatars/patricia-rodriguez.png",
  },
  {
    text: "Lo que más me gusta es cómo el robot me ayuda a tomar decisiones sin estrés. Y los videos de YouTube son muy claros y directos, ¡me han enseñado mucho en poco tiempo!",
    name: "Carlos Gómez",
    avatar: "./images/avatars/carlos-gomez.png",
  },
  {
    text: "¡Qué gran diferencia hacer trading con el robot! Todo se siente mucho más controlado. Además, el canal de YouTube tiene toneladas de consejos útiles que me han mejorado mi operativa. ¡Totalmente recomendado!",
    name: "Laura Jiménez",
    avatar: "./images/avatars/laura-himenez.png",
  },
];

import type { ReviewCardType } from "../Card/ReviewCard";
import ReviewCard from "../Card/ReviewCard";
import "./ReviewsSlider.scss";

const ReviewsSlider = () => {
  return (
    <div className="reviews-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2.2}
        spaceBetween={24}
        navigation={{
          nextEl: ".reviews-slider__next",
          prevEl: ".reviews-slider__prev",
        }}
        pagination={{ type: "fraction", el: ".reviews-slider__pagination" }}
        loop={false}
        style={{ marginRight: -60 }}
      >
        {reviewsContent.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              text={item.text}
              name={item.name}
              avatar={item.avatar}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="reviews-slider__controls">
        <div className="reviews-slider__prev">
          <svg
            width="91"
            height="15"
            viewBox="0 0 91 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.09127 1.13274L0.363701 6.86031C0.0122298 7.21178 0.0122298 7.78163 0.363701 8.1331L6.09127 13.8606C6.44274 14.2121 7.01259 14.2121 7.36406 13.8606C7.71553 13.5092 7.71553 12.9393 7.36406 12.5878L3.17289 8.3967H91.0001V6.5967H3.17289L7.36406 2.40554C7.71553 2.05406 7.71553 1.48422 7.36406 1.13274C7.01259 0.781273 6.44274 0.781273 6.09127 1.13274Z"
              fill="#878787"
            />
          </svg>
        </div>
        <div className="reviews-slider__pagination" />
        <div className="reviews-slider__next">
          <svg
            width="92"
            height="15"
            viewBox="0 0 92 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M85.4586 1.13274L91.1862 6.86031C91.5377 7.21178 91.5377 7.78163 91.1862 8.1331L85.4586 13.8606C85.1072 14.2121 84.5373 14.2121 84.1858 13.8606C83.8344 13.5092 83.8344 12.9393 84.1858 12.5878L88.377 8.3967H0.549805V6.5967H88.377L84.1858 2.40554C83.8344 2.05406 83.8344 1.48422 84.1858 1.13274C84.5373 0.781273 85.1072 0.781273 85.4586 1.13274Z"
              fill="#878787"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
