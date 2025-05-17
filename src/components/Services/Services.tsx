import BulbIcon from "../../assets/icons/services/BulbIcon";
import CandlesIcon from "../../assets/icons/services/CandlesIcon";
import HandshakeIcon from "../../assets/icons/services/HandshakeIcon";
import BulbMobileIcon from "../../assets/icons/services/mobile/BulbMobileIcon";
import CandlesMobileIcon from "../../assets/icons/services/mobile/CandlesMobileIcon";
import HandshakeMobileIcon from "../../assets/icons/services/mobile/HandshakeMobileIcon";
import SignalMobileIcon from "../../assets/icons/services/mobile/SignalMobileIcon";
import SignalUpMobileIcon from "../../assets/icons/services/mobile/SignalUpMobileIcon";
import SignalIcon from "../../assets/icons/services/SignalIcon";
import SignalUpIcon from "../../assets/icons/services/SignalUpIcon";
import { useIsMobile } from "../../utils/hooks/useIsMobile";
import "./Services.scss";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <section className="services services__wrapper" id="ofremos">
      <div className="services__top">
        <h2 className="services__header">Servicios</h2>
        <p className="services__text inter">
          Todo lo que hace única tu experiencia
        </p>
      </div>
      <div className="services__grid">
        <div className="card card--1">
          <ServicesCard
            icon={isMobile ? <SignalMobileIcon /> : <SignalIcon />}
            cardNumber="01"
            header="Señales estructuradas"
            text="Operaciones con sentido, no con suerte.
No entregamos alertas al azar. Cada señal está basada en estructura de mercado, repetición estadística y contexto. Son entradas limpias, sin ruido y sin intuición forzada."
          />
        </div>
        <div className="card card--2">
          <ServicesCard
            icon={isMobile ? <SignalUpMobileIcon /> : <SignalUpIcon />}
            cardNumber="02"
            header="No solo operas, aprendes"
            text="Cursos, sesiones grabadas y análisis reales paso a paso."
          />
        </div>
        <div className="card card--3">
          <ServicesCard
            icon={isMobile ? <BulbMobileIcon /> : <BulbIcon />}
            cardNumber="03"
            header="Nada se oculta. Todo se explica."
            text="Cada movimiento tiene un porqué. Y lo mostramos en pantalla: análisis en tiempo real, repaso de señales y razonamiento detrás de cada operación."
          />
        </div>
        <div className="card card--4">
          <ServicesCard
            icon={isMobile ? <CandlesMobileIcon /> : <CandlesIcon />}
            cardNumber="04"
            header="Comunidad privada para traders"
            text="Comparte ideas, dudas y setups con traders reales. Aquí nadie está solo."
          />
        </div>
        <div className="card card--5">
          <ServicesCard
            icon={isMobile ? <HandshakeMobileIcon /> : <HandshakeIcon />}
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
