import BulbIcon from "../../assets/icons/services/BulbIcon";
import CandlesIcon from "../../assets/icons/services/CandlesIcon";
import HandshakeIcon from "../../assets/icons/services/HandshakeIcon";
import SignalIcon from "../../assets/icons/services/SignalIcon";
import SignalUpIcon from "../../assets/icons/services/SignalUpIcon";
import "./Services.scss";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="services services__wrapper">
      <div className="services__top">
        <h2 className="services__header">Servicios</h2>
        <p className="services__text">Todo lo que hace única tu experiencia</p>
      </div>
      <div className="services__grid">
        <div className="card card--1">
          <ServicesCard
            icon={<SignalIcon />}
            cardNumber="01"
            header="Señales estructuradas"
            text="Operaciones con sentido, no con suerte.
No entregamos alertas al azar. Cada señal está basada en estructura de mercado, repetición estadística y contexto. Son entradas limpias, sin ruido y sin intuición forzada."
          />
        </div>
        <div className="card card--2">
          <ServicesCard
            icon={<SignalUpIcon />}
            cardNumber="02"
            header="No solo operas, aprendes"
            text="Cursos, sesiones grabadas y análisis reales paso a paso."
          />
        </div>
        <div className="card card--3">
          <ServicesCard
            icon={<BulbIcon />}
            cardNumber="03"
            header="Nada se oculta. Todo se explica."
            text="Cada movimiento tiene un porqué. Y lo mostramos en pantalla: análisis en tiempo real, repaso de señales y razonamiento detrás de cada operación."
          />
        </div>
        <div className="card card--4">
          <ServicesCard
            icon={<CandlesIcon />}
            cardNumber="04"
            header="Comunidad privada para traders"
            text="Comparte ideas, dudas y setups con traders reales. Aquí nadie está solo."
          />
        </div>
        <div className="card card--5">
          <ServicesCard
            icon={<HandshakeIcon />}
            cardNumber="05"
            header="Sesiones semanales con feedback"
            text="Cuentas con atención 1 a 1. Si tienes dudas técnicas, operativas o estratégicas, puedes hablar directamente con nuestro equipo."
          />
        </div>
      </div>
      <a href="#" className="services-card__button">
        Formule una pregunta
      </a>
    </section>
  );
};

export default Services;
