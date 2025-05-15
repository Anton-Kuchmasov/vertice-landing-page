import "./Activities.scss";
import ActivitiesTabs from "./Tabs/ActivitiesTabs";

const Activities = () => {
  return (
    <section className="activities activities__wrapper">
      <h2 className="activities__header">Tu camino, tus reglas</h2>
      <p className="activities__subtitle inter">
        Aprende y opera con las herramientas que mejor se adaptan a ti
      </p>
      <ActivitiesTabs />
      <div className="activities__blur activities__blur--1"></div>
      <div className="activities__blur activities__blur--2"></div>
      <div className="activities__blur activities__blur--3"></div>
      <div className="activities__blur activities__blur--4"></div>
    </section>
  );
};

export default Activities;
