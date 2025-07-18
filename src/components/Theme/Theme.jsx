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
  const [display, setDisplay] = useState(DISPLAY_STATES.preview);

  function handleToogle() {
    setDisplay(
      display === DISPLAY_STATES.preview
        ? DISPLAY_STATES.detail
        : DISPLAY_STATES.preview
    );
  }
  function handleEdit() {
    setDisplay(DISPLAY_STATES.edit);
  }
  // speichet Änderungen und verlässt EditModus
  function handleUpdateTheme(updatedTheme) {
    onUpdate(updatedTheme);
    setDisplay(DISPLAY_STATES.detail);
  }

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
        <span className="theme-arrow">
          {display === DISPLAY_STATES.preview ? "▼" : "▲"}
        </span>
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
