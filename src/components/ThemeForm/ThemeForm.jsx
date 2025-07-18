import "./ThemeForm.css";

import { useState } from "react";

export default function ThemeForm({ onAddTheme }) {
  // hier setzt States für Jede Farbe und Namen
  const [primary, setPrimary] = useState("#ffac81");
  const [secondary, setSecondary] = useState("#ff928b");
  const [surface, setSurface] = useState("#fec3a6");
  const [surfaceOn, setSurfaceOn] = useState("#cdeac0");
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    if (!name.trim()) return;
    //wenn namensFeld leer ist die funktion bricht ab

    onAddTheme({
      id: crypto.randomUUID(),
      name,
      colors: [
        { role: "Primary", value: data.primary },
        { role: "Secondary", value: data.secondary },
        { role: "Surface", value: data.surface },
        { role: "Surface-on", value: data.surfaceOn },
      ],
    });
    //onAddTheme - ruft übergeben als Prop funktion, die kommt aus App.jsx
    setName("");
    setPrimary("#a350d8");
    setSecondary("#e7a6f5");
    setSurface("#ececf1");
    setSurfaceOn("#ffffff");
    // alle Formular zurücksetzen - alle Angaben reseten und auf 'default-Beispiel Werte setzen'
  }
  return (
    //hier wird die funktion weitergegeben
    //für jede Farbe Funktion rendert ein input mit text und colorPicker
    <form className="theme-form" onSubmit={handleSubmit}>
      <div className="theme-form-row">
        <label>
          Primary:
          <input
            name="primary"
            type="color"
            value={primary}
            onChange={(event) => setPrimary(event.target.value)}
            required
          />
          <input
            name="primary"
            type="text"
            value={primary}
            onChange={(event) => setPrimary(event.target.value)}
            maxLength={7}
            pattern="#[0-9A-Fa-f]{6}"
            required
          />
        </label>
      </div>
      <div className="theme-form-row">
        <label>
          Secondary:
          <input
            name="secondary"
            type="color"
            value={secondary}
            onChange={(event) => setSecondary(event.target.value)}
            required
          />
          <input
            name="secondary"
            type="text"
            value={secondary}
            onChange={(event) => setSecondary(event.target.value)}
            maxLength={7}
            pattern="#[0-9A-Fa-f]{6}"
            required
          />
        </label>
      </div>
      <div className="theme-form-row">
        <label>
          Surface:
          <input
            name="surface"
            type="color"
            value={surface}
            onChange={(event) => setSurface(event.target.value)}
            required
          />
          <input
            name="surface"
            type="text"
            value={surface}
            onChange={(event) => setSurface(event.target.value)}
            maxLength={7}
            pattern="#[0-9A-Fa-f]{6}"
            required
          />
        </label>
      </div>
      <div className="theme-form-row">
        <label>
          Surface-on:
          <input
            type="color"
            name="surfaceOn"
            value={surfaceOn}
            onChange={(event) => setSurfaceOn(event.target.value)}
            required
          />
          <input
            name="surfaceOn"
            type="text"
            value={surfaceOn}
            onChange={(event) => setSurfaceOn(event.target.value)}
            maxLength={7}
            pattern="#[0-9A-Fa-f]{6}"
            required
          />
        </label>
      </div>
      <div className="theme-form-row">
        <label>
          Theme Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="Theme Name"
          />
        </label>
      </div>
      <button type="submit" className="theme-form-add">
        Add Theme
      </button>
    </form>
  );
}
