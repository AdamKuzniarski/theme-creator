import "./Theme.css";

import ColorCard from "../ColorCard";
import { useState } from "react";

export default function Theme({ theme }) {
  //lokaler State für zusammenklappen!
  const [open, setOpen] = useState(true);

//funktion die dreht die State open und !open => wenn open dreh den State um
function handleToogle() {
  setOpen((open) => !open);
}

return (
    <section className="theme-section">
      <div
        className="theme-collapsed"
        onClick={handleToogle}
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
          {open ? "▼" : "▲"}
        </span>
      </div>

      {open && (
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
  );
}