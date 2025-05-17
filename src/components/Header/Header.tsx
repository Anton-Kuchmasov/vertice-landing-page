import { useEffect } from "react";
import TelegramIcon from "../../assets/icons/header/TelegramIcon";
import YouTubeIcon from "../../assets/icons/header/YouTubeIcon";
import "./Header.scss";
import "./Menu.scss";

type HeaderProps = {
  handleMenu: (value: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ handleMenu }: HeaderProps) => {
    useEffect(() => {
        const links = document.querySelectorAll(".nav__link");
        const underline = document.querySelector(".nav__underline") as HTMLElement;
        const sections = document.querySelectorAll("section[id]");
        let isScrollingByClick = false;
        let scrollTimeout: ReturnType<typeof setTimeout>;
      
        const moveUnderline = (target: HTMLElement) => {
          const linkRect = target.getBoundingClientRect();
          const navRect = target.parentElement!.parentElement!.getBoundingClientRect();
          underline.style.width = `${linkRect.width}px`;
          underline.style.left = `${linkRect.left - navRect.left}px`;
        };
      
        const resetActiveLink = () => {
          links.forEach((link) => link.classList.remove("active"));
        };
      
        const setActiveLinkById = (id: string) => {
          const link = document.querySelector(`.nav__link[href="#${id}"]`) as HTMLElement;
          if (link) {
            resetActiveLink();
            link.classList.add("active");
            moveUnderline(link);
          }
        };
      
        const onScroll = () => {
          if (isScrollingByClick) return;
      
          let currentId = "";
          const scrollY = window.scrollY;
      
          sections.forEach((section) => {
            const el = section as HTMLElement;

            const sectionTop = el.offsetTop - 200;
            if (scrollY >= sectionTop) {
              currentId = section.id;
            }
          });
      
          if (currentId) {
            setActiveLinkById(currentId);
          }
        };
      
        const onClick = (e: Event) => {
          const target = e.currentTarget as HTMLAnchorElement;
          const href = target.getAttribute("href");
      
          if (href && href.startsWith("#")) {
            e.preventDefault();
      
            const section = document.querySelector(href);
            if (section) {
              isScrollingByClick = true;
      
              section.scrollIntoView({ behavior: "smooth" });
      
              setActiveLinkById(href.substring(1)); // сразу подсветим
      
              // Сброс флага через таймер — после скролла
              clearTimeout(scrollTimeout);
              scrollTimeout = setTimeout(() => {
                isScrollingByClick = false;
              }, 800); // время скролла в мс (подбери по ощущениям)
            }
          }
        };
      
        links.forEach((link) => {
            const HTMLLink = link as HTMLElement;
          link.addEventListener("click", onClick);
          link.addEventListener("mouseenter", () => moveUnderline(HTMLLink));
          link.addEventListener("focus", () => moveUnderline(HTMLLink));
          link.addEventListener("mouseleave", () => {
            const active = document.querySelector(".nav__link.active") as HTMLElement;
            if (active) moveUnderline(active);
          });
          link.addEventListener("blur", () => {
            const active = document.querySelector(".nav__link.active") as HTMLElement;
            if (active) moveUnderline(active);
          });
        });
      
        window.addEventListener("scroll", onScroll);
      
        // При загрузке страницы
        const active = document.querySelector(".nav__link.active") as HTMLElement;
        if (active) moveUnderline(active);
        else if (links.length > 0) {
          links[0].classList.add("active");
          moveUnderline(links[0] as HTMLElement);
        }
      
        return () => {
          window.removeEventListener("scroll", onScroll);
          links.forEach((link) => {
            const HTMLLink = link as HTMLElement;

            link.removeEventListener("click", onClick);
            link.removeEventListener("mouseenter", () => moveUnderline(HTMLLink));
            link.removeEventListener("focus", () => moveUnderline(HTMLLink));
            link.removeEventListener("mouseleave", () => moveUnderline(HTMLLink));
            link.removeEventListener("blur", () => moveUnderline(HTMLLink));
          });
        };
      }, []);
      
      

  const goToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    history.pushState(null, "", window.location.pathname);
  };

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
              <a href="#inicio" className="nav__link active" onClick={goToTop}>
                Inicio
              </a>
            </li>
            <li className="nav__item">
              <a href="#ofremos" className="nav__link">
                Lo que ofrecemos
              </a>
            </li>
            <li className="nav__item">
              <a href="#funciona" className="nav__link">
                Cómo funciona
              </a>
            </li>
            <li className="nav__item">
              <a href="#contacto" className="nav__link">
                Contacto
              </a>
            </li>
          </ul>
          <div className="nav__underline" />
        </div>
        <div className="header__icons">
          <a
            href="https://t.me/+jUzjIJ6qoos1MDhi"
            target="_blank"
            className="header__social-link"
          >
            <YouTubeIcon />
          </a>
          <a
            href="https://t.me/+jUzjIJ6qoos1MDhi"
            target="_blank"
            className="header__social-link"
          >
            <TelegramIcon />
          </a>
        </div>
      </div>
      <div className="header header--mobile">
        <div className="header__logo">
          <div className="header__logo--blur" />
          <img src="./images/vertice-logo.png" alt="Vertice Logo" />
        </div>
        <button
          className="header__burger-menu"
          onClick={() => handleMenu(true)}
        >
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
        </button>
      </div>
    </>
  );
};

export default Header;
