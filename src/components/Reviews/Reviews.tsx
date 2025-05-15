import type { ReviewCardType } from "./Card/ReviewCard";
import "./Reviews.scss";
import ReviewsSlider from "./Slider/ReviewsSlider";
const ReviewsContent: ReviewCardType[] = [
  {
    text: "Al principio no sabía nada de trading, pero con los videos de YouTube y el robot, todo cambió. Ahora tengo una forma más clara de operar y ¡ya empiezo a ver resultados! Me siento mucho más seguro con las estrategias que enseñas.",
    name: 'Juan Pérez',
    avatar: './avatars/juan-perez.png'
  },
  {
    text: "Al principio no sabía nada de trading, pero con los videos de YouTube y el robot, todo cambió. Ahora tengo una forma más clara de operar y ¡ya empiezo a ver resultados! Me siento mucho más seguro con las estrategias que enseñas.",
    name: 'Juan Pérez',
    avatar: './avatars/juan-perez.png'
  },
  {
    text: "Empecé a seguir el canal de YouTube y me sorprendió la claridad con la que explicas todo. El robot que usas hace que las decisiones sean más fáciles, y el aprendizaje es super accesible. ¡Recomiendo 100%!",
    name: 'Mariana López',
    avatar: './avatars/mariana-lopez.png'
  },
  {
    text: "Pensé que el trading era complicado, pero después de usar el robot y ver las lecciones en YouTube, todo se volvió mucho más sencillo. ¡Estoy ganando confianza y resultados gracias a las estrategias que compartes!",
    name: 'Roberto Martínez',
    avatar: './avatars/roberto-martinez.png'
  },
  {
    text: "No estaba segura si debía confiar en un robot para operar, pero después de ver cómo funciona el sistema y aprender a usarlo en el canal, ¡fue una gran decisión! Me siento mucho más preparada para operar por mi cuenta.",
    name: 'Patricia Rodríguez',
    avatar: './avatars/patricia-rodriguez.png'
  },
  {
    text: "Lo que más me gusta es cómo el robot me ayuda a tomar decisiones sin estrés. Y los videos de YouTube son muy claros y directos, ¡me han enseñado mucho en poco tiempo!",
    name: 'Carlos Gómez',
    avatar: './avatars/carlos-gomez.png'
  },
  {
    text: "¡Qué gran diferencia hacer trading con el robot! Todo se siente mucho más controlado. Además, el canal de YouTube tiene toneladas de consejos útiles que me han mejorado mi operativa. ¡Totalmente recomendado!",
    name: 'Laura Jiménez',
    avatar: './avatars/laura-himenez.png'
  },
];

const Reviews = () => {
  return (
    <section className="reviews reviews__wrapper">
      <h2 className="reviews__header">Qué dicen nuestros clientes?</h2>
      <p className="reviews__subtitle">
        Какой-то длинный подзаголовок который описывает данный блок
      </p>
      <ReviewsSlider />
    </section>
  );
};

export default Reviews;
