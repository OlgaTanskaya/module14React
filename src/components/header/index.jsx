import { useState } from "react";
import LOGO from "../../assets/LOGO.png";
import style from "./header.module.css";
import burger from "../../assets/burger.svg";
const Header = ({ setDarkTheme, darkTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="container">
      <div className={style.header__inner}>
        <h2 className={style.logo}> DAMIEN</h2>
        <div className={`${style.list} ${menuOpen ? style.open : ""}`}>
          <nav>
            <a href="#" className={style.nav_item}>
              Home
            </a>
            <a href="#about" className={style.nav_item}>
              About Me
            </a>
            <a href="#portfolio" className={style.nav_item}>
              Portfolio
            </a>
            <a href="#services" className={style.nav_item}>
              Services
            </a>
          </nav>
          <div className={`${style.right} ${menuOpen ? style.open : ""}`}>
            <button
              className="toggle-btn"
              onClick={() => setDarkTheme(!darkTheme)}
            >
              Theme
            </button>
            <button>Contact Me</button>
          </div>
        </div>
        <button
          className={`${style.burger} ${menuOpen ? style.active : ""}`}
          onClick={toggleMenu}
        >
          <img src={burger} alt="Закрыть меню" />
        </button>
      </div>
    </header>
  );
};

export default Header;
