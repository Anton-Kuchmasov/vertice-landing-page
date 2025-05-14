import SmallStar from "../../assets/icons/benefits/SmallStar";
import "./Benefits.scss";

const Benefits = () => {
  return (
    <div className="benefits benefits__wrapper">
      <div className="benefits__blur benefits__blur--top" />
      <div className="benefits__blur benefits__blur--bottom" />
      <div className="benefits__content">
        <p className="benefits__benefit">
          Aquí no venimos a jugar con impulsos. Tampoco a entrar por entrar.
        </p>
        <p className="benefits__benefit">
          <span className="benefits__benefit--important">
            VÉRTICE filtra el mercado con cabeza fría:
          </span>{" "}
          estructuras, zonas limpias y entradas que tienen sentido.
        </p>
        <p className="benefits__benefit">
          Nada de señales por intuición, nada de ruleta.
        </p>
        <p className="benefits__benefit">
          <span className="benefits__benefit--important">Formación real.</span>{" "}
          Videos que explican cada entrada. Un sistema que piensa antes que tú.
        </p>
        <p className="benefits__benefit">
          Tú decides si ejecutas.{" "}
          <span className="benefits__benefit--important">VÉRTICE</span> ya
          filtró lo demás.
        </p>
        <div className="benefits__star benefits__star--1">
          <SmallStar />
        </div>
        <div className="benefits__star benefits__star--2">
          <SmallStar />
        </div>
        <div className="benefits__star benefits__star--3">
          <SmallStar />
        </div>
        <div className="benefits__star benefits__star--4">
          <SmallStar />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
