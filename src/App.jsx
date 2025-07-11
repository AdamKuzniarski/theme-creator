import "./App.css";
import ColorCard from "./components/ColorCard.jsx";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import themes from "./db.js";
function App() {
  return (
    <>
      <Header />

      {themes.map((theme) => (
        <section key={theme.name}>
          <h3>{theme.name}</h3>

          {theme.colors.map((color) => (
            <ColorCard
              key={color.id}
              role={color.role}
              hex={color.value}
              backgroundColor={color.value}
            />
          ))}
        </section>
      ))}
    </>
  );
}
console.log(themes.colors);
export default App;
