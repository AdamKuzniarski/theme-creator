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
  );
}
export default App;
