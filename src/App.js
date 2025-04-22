import "./App.css";
import HeroSection from "./components/hero/HeroSection";

function App() {
  return (
    <div className="App">
      <div className="header-line">
        {`CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
         SHIPPING on orders > $200 | easy 45 day return window.`}
      </div>
      <div className="container">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
