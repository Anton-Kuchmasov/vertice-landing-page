import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import TelegramIcon from "../../assets/icons/header/TelegramIcon";
import YouTubeIcon from "../../assets/icons/header/YouTubeIcon";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import "../../App.scss";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    const target = document.querySelector(".menu");
    if (isMenuOpen && target) {
      scrollPosition.current = window.scrollY;
      disableBodyScroll(target);
    } else {
      enableBodyScroll(target!);
      setTimeout(() => {

          window.scrollTo({
              top: scrollPosition.current,
              left: 0,
              behavior: "instant",
            });
        }, 0);
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const isBottom = scrollY + windowHeight >= documentHeight;

      const container = document.querySelector(".app-container");
      if (container) {
        container.classList.toggle("no-footer-fade", isBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="promo promo__wrapper" />
        <header className="header-wrapper">
          <Header handleMenu={setIsMenuOpen} />
        </header>

        <main className="main-wrapper">
          <Outlet />
        </main>
        <footer className="footer-wrapper">
          <Footer />
        </footer>
      </div>
      <aside
        className={`header__menu menu ${isMenuOpen ? "open" : ""}`}
        id="menu"
      >
        <a href="#" className="menu__blur">
          <button className="menu__blur" onClick={() => setIsMenuOpen(false)}>
            <div className="menu__close">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L19 19M19 1L1.00002 19"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </button>
        </a>
        <div className="menu__content">
          <nav className="menu__nav">
            <ul className="menu__list">
              <li className="menu__item" onClick={() => setIsMenuOpen(false)}>
                <a href="#inicio" className="menu__link">
                  Inicio
                </a>
              </li>
              <li className="menu__item" onClick={() => setIsMenuOpen(false)}>
                <a href="#ofrecemos" className="menu__link">
                  Lo que ofrecemos
                </a>
              </li>
              <li className="menu__item" onClick={() => setIsMenuOpen(false)}>
                <a href="#funciona" className="menu__link">
                  Cómo funciona
                </a>
              </li>
              <li className="menu__item" onClick={() => setIsMenuOpen(false)}>
                <a href="#contacto" className="menu__link">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <div className="menu__bottom">
            <a
              href="#"
              className="menu__button"
              onClick={() => setIsMenuOpen(false)}
            >
              Empezar ahora con VÉRTICE
            </a>
            <div className="menu__icons">
              <a
                href="https://t.me/+jUzjIJ6qoos1MDhi"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://t.me/+jUzjIJ6qoos1MDhi"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MainLayout;
