import SmallStar from "../../assets/icons/benefits/SmallStar";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <section className="contact-section contact-section__wrapper" id="contacto">
      <h2 className="contact-section__header">Ponte en contacto</h2>
      <p className="contact-section__subtitle inter">
        Estamos aquí para ayudarle
        <br /> Descubra las ventajas de los servicios VÉRTICE a través de
        nuestra consulta inicial gratuita.
      </p>
      <a href="#" className="contact-section__link">
        Formule una pregunta
      </a>
      <div className="contact-section__star contact-section__star--1">
        <SmallStar />
      </div>
      <div className="contact-section__star contact-section__star--2">
        <SmallStar />
      </div>
      <div className="contact-section__star contact-section__star--3">
        <SmallStar />
      </div>
      <div className="contact-section__star contact-section__star--4">
        <SmallStar />
      </div>
      <div className="contact-section__blur contact-section__blur--1" />
      <div className="contact-section__blur contact-section__blur--2" />
    </section>
  );
};

export default ContactSection;
