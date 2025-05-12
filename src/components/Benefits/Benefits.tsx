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
          VÉRTICE filtra el mercado con cabeza fría: estructuras, zonas limpias
          y entradas que tienen sentido.
        </p>
        <p className="benefits__benefit">
          Nada de señales por intuición, nada de ruleta.
        </p>
        <p className="benefits__benefit">
          Formación real. Videos que explican cada entrada. Un sistema que
          piensa antes que tú.
        </p>
        <p className="benefits__benefit">
          Tú decides si ejecutas. VÉRTICE ya filtró lo demás.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
