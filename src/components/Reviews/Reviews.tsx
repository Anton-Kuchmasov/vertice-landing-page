import "./Reviews.scss";
import ReviewsSlider from "./Slider/ReviewsSlider";


const Reviews = () => {
  return (
    <section className="reviews reviews__wrapper">
      <h2 className="reviews__header">Qué dicen nuestros clientes?</h2>
      <p className="reviews__subtitle inter">
        Какой-то длинный подзаголовок который описывает данный блок
      </p>
      <ReviewsSlider />
    </section>
  );
};

export default Reviews;
