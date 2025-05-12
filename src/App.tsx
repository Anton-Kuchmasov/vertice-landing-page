import "./App.scss";
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
      </main>
    </div>
  );
}

export default App;
