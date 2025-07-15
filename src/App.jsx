import "./App.css";
import themes from "./db.js";
import Header from "./Header/Header.jsx";
import Theme from "./components/Theme/Theme.jsx";
import ThemeForm from "./components/ThemeForm/ThemeForm.jsx";
import useLocalStorageState from "use-local-storage-state";

const initialThemes = themes;
// die Werte von 'DatenBank' -datei db.js holen
function App() {

  const [themes, setThemes] = useLocalStorageState('themes',{defaultValue: initialThemes});

  function handleAddTheme(newTheme) {
    setThemes([newTheme, ...themes]);
   //console.log(newTheme);
  }

  function handleDeleteTheme(idToDelete){
    setThemes(themes => themes.filter(theme => theme.id !== idToDelete))
  }

  return (
    <>
      <Header />
      {/* die Function wird hier von ThemeForm als Prop -onAddTheme übergeben und wird mit Objekt zurückggeben  */}
      <ThemeForm onAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} onDelete={handleDeleteTheme} /> // delete Prop wird weitergeben 
      ))}
    </>
  );
}
export default App;
