import "./Services.scss";
interface ServicesCardProps {
  icon: React.ReactNode;
  cardNumber: string;
  header: string;
  text: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  icon,
  cardNumber,
  header,
  text,
}: ServicesCardProps) => {
  return (
    <article className="services-card services-card__wrapper">
      <div className="services-card__top">
        <div className="services-card__top--icon">
          {icon}
        </div>
        <div className="services-card__top--number">{cardNumber}</div>
      </div>
      <div className="services-card__info">
        <h3 className="services-card__info--header">{header}</h3>
        <p className="services-card__info--text">{text}</p>
      </div>
      <div className="services-card__blur"></div>
    </article>
  );
};

export default ServicesCard;
