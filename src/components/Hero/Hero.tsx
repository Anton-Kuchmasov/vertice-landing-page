import ScrollDownIcon from "../../assets/icons/hero/ScrollDownIcon";
import "./Hero.scss";

const handleScrollDown = (e: React.MouseEvent) => {
  e.preventDefault();
  window.scrollBy({
    top: window.innerHeight - 106,
    left: 0,
    behavior: "smooth",
  });
};

const Hero = () => {
  return (
    <section className="hero">
      <div className=" hero__wrapper">
        {" "}
        <h1 className="hero__header">
          Más que señales. Una forma de pensar y operar.
        </h1>
        <p className="hero__info inter">
          VÉRTICE es una herramienta diseñada para traders que buscan claridad,
          estructura y criterio. <br /> Con contenido educativo, formación
          profesional y señales filtradas por lógica.
        </p>
        <a href="#" className="hero__button">
          Empezar ahora con VÉRTICE
        </a>
      </div>
      <button
        type="button"
        className="hero__scroll-down"
        onClick={handleScrollDown}
      >
        <span className="hero__scroll-down--text">Scroll Down</span>
        <ScrollDownIcon />
      </button>
    </section>
  );
};

export default Hero;
