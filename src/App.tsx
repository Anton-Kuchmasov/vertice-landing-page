import "./App.scss";
import Activities from "./components/Activities/Activities";
import Benefits from "./components/Benefits/Benefits";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
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
      </main>
    </div>
  );
}

export default App;
