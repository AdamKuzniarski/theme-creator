import "./App.css";
import themes from "./db.js";
import Header from "./Header/Header.jsx";
import Theme from "./components/Theme/Theme.jsx";
import ThemeForm from "./components/ThemeForm/ThemeForm.jsx";
import { useState } from "react";

const initialThemes = themes;

function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(newTheme) {
    setThemes([newTheme, ...themes]);
    console.log(newTheme);
  }

  return (
    <>
      <Header />
      {/* die function wird hier von ThemeForm übergeben und ausgelöst  */}
      <ThemeForm onAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <Theme key={theme.name} theme={theme} />
      ))}
    </>
    /* {themes.map((theme) => (
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
      ))} */
  );
}
export default App;
