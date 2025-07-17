import "./Theme.css";

import ColorCard from "../ColorCard";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";

const DISPLAY_STATES = {
  preview: "preview",
  detail: "detail",
  edit: "edit",
};
//ENUM

export default function Theme({ theme, onDelete, onUpdate }) {
  //lokaler State für zusammenklappen!

  const [display, setDisplay] = useState(DISPLAY_STATES.preview);

  // wemm soch prop 'theme' ändert wird synchronisiert

  //funktion die dreht die State open und !open => wenn open dreh den State um
  function handleToogle() {
    setDisplay(
      display === DISPLAY_STATES.preview
        ? DISPLAY_STATES.detail
        : DISPLAY_STATES.preview
    );
  }
  //edit modus wechseln
  function handleEdit() {
    setDisplay(DISPLAY_STATES.edit);
  }
  // speichet Änderungen und verlässt EditModus
  function handleUpdateTheme(updatedTheme) {
    onUpdate(updatedTheme);
    setDisplay(DISPLAY_STATES.detail);
  }

  // index track welche Farbe im Array betroffen wird

  return (
    <section className="theme-section">
      <div
        className="theme-collapsed"
        // add hendler function to DIV element
        onClick={handleToogle}
        style={{ cursor: "pointer" }}
      >
        <h3>{theme.name}</h3>
        <div className="theme-swatches">
          {theme.colors.map((color) => (
            <div
              key={color.role}
              className="theme-swatch"
              style={{ background: color.value }}
              title={color.role}
            />
          ))}
        </div>
        <span className="theme-arrow">{open ? "▼" : "▲"}</span>
      </div>

      {display === DISPLAY_STATES.detail && (
        <div className="theme-detail">
          {theme.colors.map((color) => (
            <ColorCard key={color.role} role={color.role} hex={color.value} />
          ))}
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="theme-delete-button"
            onClick={() => onDelete(theme.id)}
          >
            Delete Theme
          </button>
        </div>
      )}
      {display === DISPLAY_STATES.edit && (
        <EditForm onSubmit={handleUpdateTheme} theme={theme} />
      )}
    </section>
  );
}
