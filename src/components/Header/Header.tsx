import TelegramIcon from "../../assets/icons/header/TelegramIcon";
import YouTubeIcon from "../../assets/icons/header/YouTubeIcon";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header header--desktop">
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
      <div className="header header--mobile">
        <div className="header__logo">
          <div className="header__logo--blur" />
          <img src="./images/vertice-logo.png" alt="Vertice Logo" />
        </div>
        <div className="header__burger-menu">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8C3 7.44772 3.44772 7 4 7H36C36.5523 7 37 7.44772 37 8C37 8.55228 36.5523 9 36 9H4C3.44772 9 3 8.55228 3 8Z"
              fill="white"
            />
            <path
              d="M3 20C3 19.4477 3.44772 19 4 19H36C36.5523 19 37 19.4477 37 20C37 20.5523 36.5523 21 36 21H4C3.44772 21 3 20.5523 3 20Z"
              fill="white"
            />
            <path
              d="M3 31C3 30.4477 3.44772 30 4 30H36C36.5523 30 37 30.4477 37 31C37 31.5523 36.5523 32 36 32H4C3.44772 32 3 31.5523 3 31Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
