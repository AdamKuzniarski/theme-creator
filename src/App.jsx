import "./App.css";
import themes from "./db.js";
import Header from "./Header/Header.jsx";
import Theme from "./components/Theme/Theme.jsx";
import ThemeForm from "./components/ThemeForm/ThemeForm.jsx";
import { useState } from "react";

const initialThemes = themes;
// die Werte von 'DatenBank' -datei db.js holen
function App() {

  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(newTheme) {
    setThemes([newTheme, ...themes]);
    console.log(newTheme);
  }

  return (
    <>
      <Header />
      {/* die Function wird hier von ThemeForm als Prop -onAddTheme übergeben und wird mit Objekt zurückggeben  */}
      <ThemeForm onAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} />
      ))}
    </>
  );
}
export default App;
