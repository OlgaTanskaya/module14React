import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Asced from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/footer";
import ToggleThemeButton from "./components/theme";

import "./var.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div>
      <ToggleThemeButton darkTheme={darkTheme} />
      <div className="content">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Asced />
        <Testimonials />

        <Footer />
      </div>
    </div>
  );
}

export default App;
