import "./App.scss";
import Benefits from "./components/Benefits/Benefits";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

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
      </main>
    </div>
  );
}

export default App;
