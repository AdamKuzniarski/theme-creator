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
    //verhindert leeren Namen hinzufügen
    if (!name.trim()) return;

    onAddTheme({
      name,
      colors: [
        { role: "Primary", value: primary },
        { role: "Secondary", value: secondary },
        { role: "Surface", value: surface },
        { role: "Surface-on", value: surfaceOn },
      ],
    });
    setName("");
    setPrimary("#a350d8");
    setSecondary("#e7a6f5");
    setSurface("#ececf1");
    setSurfaceOn("#ffffff");
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
      <div className="theme-form-row">
        <label>
          Surface:
          <input
            type="color"
            value={surface}
            onChange={(event) => setSurface(event.target.value)}
            required
          />
          <input
            type="text"
            value={secondary}
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
            value={surfaceOn}
            onChange={(event) => setSurfaceOn(event.target.value)}
            required
          />
          <input
            type="text"
            value={secondary}
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
