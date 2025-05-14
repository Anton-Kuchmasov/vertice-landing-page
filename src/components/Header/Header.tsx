import TelegramIcon from "../../assets/icons/header/TelegramIcon";
import YouTubeIcon from "../../assets/icons/header/YouTubeIcon";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo--blur" />
        <img src="./images/vertice-logo.png" alt="Vertice Logo" />
      </div>
      <div className="header__nav">
        <ul className="nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Inicio
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Lo que ofrecemos
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Cómo funciona
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <div className="header__icons">
        <a href="#" className="header__social-link">
          <YouTubeIcon />
        </a>
        <a href="#" className="header__social-link">
          <TelegramIcon />
        </a>
      </div>
    </div>
  );
};

export default Header;
