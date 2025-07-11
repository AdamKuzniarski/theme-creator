 import "./Main.css";

import themes from "../db.js";
export default function Main() {
  function exportThemeValues() {
    const hexValue = themes.map((theme) => theme.colors);
    console.log(hexValue);
    return hexValue;
  }
  exportThemeValues();
  return (
    <>
      <ul>
        {themes.map((theme) => (
          <li key={theme.id}>
            {theme.name}:{" "}
            {Object.values(theme.colors).map(
              (colorObj) => `${colorObj.role}: ${colorObj.value}`
            )}
          </li>
        ))}
      </ul>
    </>
  );
} 
