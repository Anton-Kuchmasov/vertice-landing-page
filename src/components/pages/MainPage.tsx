import Activities from "../Activities/Activities";
import Benefits from "../Benefits/Benefits";
import ContactSection from "../ContactSection/ContactSection";
import Hero from "../Hero/Hero";
import PromoMarquee from "../Marquee/PromoMarquee";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

import "../../App.scss";

const MainPage = () => {
  return (
    <>
      <div className="hero-wrapper">
        <Hero />
      </div>
      <Benefits />
      <Services />
      <Activities />
      <Reviews />
      <PromoMarquee />
      <ContactSection />
    </>
  );
};

export default MainPage;
