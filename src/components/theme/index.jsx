import { useState } from "react";
import "./index.css";

const ToggleThemeButton = ({ darkTheme }) => {
  return (
    <div className="toggle-btn-wrapper container">
      <input type="checkbox" id="light" checked={!darkTheme} />
      <input type="checkbox" id="dark" checked={darkTheme} />
    </div>
  );
};

export default ToggleThemeButton;
