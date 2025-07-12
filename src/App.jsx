import "./App.css";
import ColorCard from "./components/ColorCard.jsx";
import Header from "./Header/Header.jsx";

import themes from "./db.js";
import { useState } from "react";


function App() {
  const [openTheme, setOpenTheme] = useState(null);

  function handleToggle(themeName) {
    setOpenTheme(openTheme === themeName ? null : themeName);
  }
  return (
    <>
      <Header />

      {themes.map((theme) => (
        <section key={theme.name} className="theme-section">
          <div
            className="theme-collapsed"
            onClick={() => handleToggle(theme.name)}
            style={{ cursor: "pointer" }}
          >
            <h3>{theme.name}</h3>
            <div className="theme-swatches">
              {theme.colors.map((color) => (
                <div
                  key={color.role}
                  className="theme-swatch"
                  style={{ backgroundColor: color.value }}
                  title={color.role}
                />
              ))}
            </div>
            <span className="theme-arrow">
              {openTheme === theme.name ? "▼" : "▲"}
            </span>
          </div>

          {openTheme === theme.name && (
            <div className="theme-detail">
              {theme.colors.map((color) => (
                <ColorCard
                  key={color.role}
                  role={color.role}
                  hex={color.value}
                />
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
}
export default App;
