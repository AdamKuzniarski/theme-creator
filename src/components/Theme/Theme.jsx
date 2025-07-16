import "./Theme.css";

import ColorCard from "../ColorCard";
import { useEffect, useState } from "react";

export default function Theme({ theme, onDelete, onUpdate }) {
  //lokaler State für zusammenklappen!
  const [open, setOpen] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editTheme, setEditTheme] = useState(false);

  // wemm soch prop 'theme' ändert wird synchronisiert
  useEffect(() => {
    setEditTheme(theme);
  }, [theme]);
  //funktion die dreht die State open und !open => wenn open dreh den State um
  function handleToogle() {
    setOpen((open) => !open);
  }

  function handleEdit() {
    setEdit(true);
  }

  function handleSave() {
    onUpdate(editTheme);
    setEdit(false);
  }

  function handleChangeName(event) {
    const name = event.target.value;
    setEditTheme((editTheme) => ({ ...editTheme, name }));
  }

  function handleColorChange(index, newValue) {
    // array kopieren
    const newColors = [...editTheme.colors];
    // eim eomzelnes Objekt aktualiseiern
    newColors[index] = { ...newColors[index], value: newValue };
    //State updaten + render
    setEditTheme((editTheme) => ({ ...editTheme, colors: newColors }));
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
        <span className="theme-arrow">{open ? "▼" : "▲"}</span>
      </div>

      {open && (
        <div className="theme-detail">
          {!edit ? (
            <>
              {theme.colors.map((color) => (
                <ColorCard
                  key={color.role}
                  role={color.role}
                  hex={color.value}
                />
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
            </>
          ) : (
            <>
              <label>
                Name:
                <input
                  type="text"
                  value={editTheme.name}
                  onChange={handleChangeName}
                />
              </label>
              {editTheme.colors.map((color, index) => (
                <div key={color.role} className="edit-row">
                  {color.role}
                  <input
                    type="color"
                    value={color.value}
                    onChange={(event) =>
                      handleColorChange(index, event.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={color.value}
                    onChange={(event) =>
                      handleColorChange(index, event.target.value)
                    }
                  />
                </div>
              ))}
              <button type="button" onClick={handleSave}>
                Save Theme
              </button>
              <button type="button" onClick={() => setEdit(false)}>
                Cancel
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
