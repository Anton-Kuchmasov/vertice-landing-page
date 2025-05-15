import { useEffect } from "react";
import "./App.scss";
import Activities from "./components/Activities/Activities";
import Benefits from "./components/Benefits/Benefits";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PromoMarquee from "./components/Marquee/PromoMarquee";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";

function App() {
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
    <div className="app-container">
      <header className="header-wrapper">
        <Header />
      </header>

      <main className="main-wrapper">
        <div className="hero-wrapper">
          <Hero />
        </div>
        <Benefits />
        <Services />
        <Activities />
        <Reviews />
        <PromoMarquee />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
