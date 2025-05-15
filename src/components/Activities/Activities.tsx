import "./Activities.scss";
import ActivitiesTabs from "./Tabs/ActivitiesTabs";

const Activities = () => {
  return (
    <section className="activities activities__wrapper">
      <h2 className="activities__header">Tu camino, tus reglas</h2>
      <p className="activities__subtitle">
        Aprende y opera con las herramientas que mejor se adaptan a ti
      </p>
      <ActivitiesTabs />
    </section>
  );
};

export default Activities;
