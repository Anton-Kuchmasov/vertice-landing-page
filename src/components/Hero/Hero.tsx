import ScrollDownIcon from "../../assets/icons/hero/ScrollDownIcon";
import { useIsMobile } from "../../utils/hooks/useIsMobile";
import "./Hero.scss";

const Hero = () => {
  const isMobile = useIsMobile();
  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollBy({
      top: isMobile ? window.innerHeight - 71 : window.innerHeight - 106,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="inicio">
      <div className=" hero__wrapper">
        {" "}
        <h1 className="hero__header">
          Más que señales. Una forma de pensar y operar.
        </h1>
        <p className="hero__info hero__info--desktop inter">
          VÉRTICE es una herramienta diseñada para traders que buscan claridad,
          estructura y criterio. <br /> Con contenido educativo, formación
          profesional y señales filtradas por lógica.
        </p>
        <p className="hero__info hero__info--mobile inter">
          VÉRTICE es una herramienta diseñada para traders que buscan claridad,
          estructura y criterio. Con contenido educativo, formación profesional
          y señales filtradas por lógica.
        </p>
        <a href="https://t.me/+jUzjIJ6qoos1MDhi" className="hero__button">
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
