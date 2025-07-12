import "./ThemeForm.css";

import { useState } from "react";

export default function ThemeForm({ onAddTheme }) {
  // hier setzt States für Jede Farbe und Namen
  const [primary, setPrimary] = useState("#a350d8");
  const [secondary, setSecondary] = useState("#e7a6f55");
  const [surface, setSurface] = useState("#ececf1");
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //verhindert leeren Namen hinzufügen
    if (!name.trim()) return;

    onAddTheme({
      name,
      colors: [
        { role: "Primary", value: primary },
        { role: "Secondary", value: secondary },
        { role: "Surface", value: surface },
      ],
    });
    setName("");
    setPrimary("#a350d8");
    setSecondary("#e7a6f5");
    setSurface("#ececf1");
  }
  return (
    //hier wird die funktion weitergegeben
    <form className="theme-form" onSubmit={handleSubmit}>
      <div className="theme-form-row">
        <label>
          Primary:
          <input
            type="color"
            value={primary}
            onChange={(event) => setPrimary(event.target.value)}
            required
          />
          <input
            type="text"
            value={primary}
            onChange={(event) => setPrimary(event.target.value)}
            maxLength={7}
            pattern="#[0-9A-Fa-f]{6}"
          />
        </label>
      </div>
      <div className="theme-form-row">
        <label>
          Secondary:
          <input
            type="color"
            value={secondary}
            onChange={(event) => setSecondary(event.target.value)}
            required
          />
          <input
            type="text"
            value={secondary}
            onChange={(event) => setSecondary(event.target.value)}
            maxLength={7}
            pattern="#[0-9A-Fa-f]{6}"
            required
          />
        </label>
      </div>
    </form>
  );
}
