import { Link } from "react-router";
import "./RightsPage.scss";

const RightsPage = () => {
  return (
    <div className="rights-page">
      <h2 className="rights-page__header">Condiciones de uso</h2>
      <div className="rights-page__content">
        <p className="rights-page__paragraph">
          Bienvenido a VERTICE. Le rogamos que lea atentamente las presentes
          Condiciones Generales antes de utilizar nuestro sitio web.
        </p>{" "}
        <p className="rights-page__paragraph">
          Al acceder o utilizar nuestro sitio web, acepta quedar vinculado por
          estas Condiciones. Si no está de acuerdo con alguna parte de estas
          condiciones, le rogamos que no utilice nuestros servicios.{" "}
        </p>
        <ul className="rights-page__list">
          <li className="rights-page__right">
            {" "}
            1. Propósito de la Plataforma
            <br /> VERTICE es una plataforma educativa que proporciona
            información general y materiales relacionados con la negociación y
            los mercados financieros únicamente con fines informativos y de
            aprendizaje.
            <br />
            <br /> No ofrecemos asesoramiento en materia de inversión, señales
            de negociación ni ningún tipo de servicio financiero. Nada en este
            sitio web constituye una recomendación para participar en ninguna
            actividad de inversión o negociación.{" "}
          </li>
          <li className="rights-page__right">
            2. Elegibilidad
            <br /> Al utilizar este sitio web, usted confirma que tiene al menos
            18 años o es mayor de edad en su jurisdicción y que es plenamente
            capaz de celebrar un acuerdo vinculante.{" "}
          </li>
          <li className="rights-page__right">
            3. Sin asesoramiento financiero-
            <br /> Toda la información proporcionada en esta plataforma está
            destinada únicamente a fines educativos e informativos. No ofrecemos
            asesoramiento financiero, legal o fiscal.
            <br />
            <br />
            Usted es el único responsable de cualquier decisión que tome
            basándose en el contenid o proporcionado por VERTICE.{" "}
          </li>
          <li className="rights-page__right">
            {" "}
            4. Sin garantías <br />
            VERTICE no ofrece garantías de ningún tipo en cuanto a la exactitud,
            fiabilidad o integridad del contenido educativo. No prometemos ni
            garantizamos ningún resultado financiero o éxito en el comercio o la
            inversión.{" "}
          </li>
          <li className="rights-page__right">
            5. Limitación de responsabilidad
            <br /> Bajo ninguna circunstancia VERTICE, sus propietarios, socios
            o afiliados serán responsables de las pérdidas o daños resultantes
            del uso de nuestro sitio web o de cualquier contenido proporcionado
            en el mismo.
            <br />
            <br /> El uso de nuestro contenido es bajo su propio riesgo.{" "}
          </li>
          <li className="rights-page__right">
            6. Propiedad intelectual <br />
            Todo el contenido, la marca y los materiales de este sitio web son
            propiedad de VERTICE y no pueden copiarse, reproducirse ni
            redistribuirse sin el consentimiento previo por escrito.{" "}
          </li>
          <li className="rights-page__right">
            7. Enlaces de terceros
            <br /> Nuestro sitio web puede contener enlaces a sitios web de
            terceros. No nos hacemos responsables del contenido ni de la
            exactitud de los sitios web de terceros, por lo que la visita a
            dichos sitios queda a su entera discreción.{" "}
          </li>
          <li className="rights-page__right">
            8. Modificaciones de las presentes condiciones
            <br /> Nos reservamos el derecho a actualizar o modificar estas
            Condiciones Generales en cualquier momento y sin previo aviso. El
            uso continuado del sitio web constituye su aceptación de cualquier
            cambio.{" "}
          </li>
          <li className="rights-page__right">
            9. Contacto
            <br /> Si tiene alguna pregunta sobre estas Condiciones, póngase en
            contacto con nosotros en support@vertice.com
          </li>
        </ul>

      </div>
      <Link to="/" className="rights-page__link">
          Volver a casa
        </Link>
    </div>
  );
};

export default RightsPage;
