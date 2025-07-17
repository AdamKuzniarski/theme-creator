import "./EditForm.css";

export default function EditForm({ onSubmit, theme }) {
  // hier setzt States für Jede Farbe und Namen

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    if (!data.name.trim()) return;
    //wenn namensFeld leer ist die funktion bricht ab
    const updatedTheme = {
      id: theme.id,
      name: data.name,
      colors: [
        { role: "Primary", value: data.primary },
        { role: "Secondary", value: data.secondary },
        { role: "Surface", value: data.surface },
        { role: "Surface-on", value: data.surfaceOn },
      ],
   
      
    };
    onSubmit(updatedTheme)
    
  }


  return (
    //hier wird die funktion weitergegeben
    //für jede Farbe Funktion rendert ein input mit text und colorPicker
    <form className="theme-form" onSubmit={handleSubmit}>
      <div className="theme-form-row">
        <label>
          Primary:
          <input
            type="color"
            name="primary"
            defaultValue={theme.colors[0].value}
            required
          />
        </label>
      </div>
      <div className="theme-form-row">
        <label>
          Secondary:
          <input
            type="color"
            name="secondary"
            defaultValue={theme.colors[1].value}
            required
          />
        </label>
      </div>
      <div className="theme-form-row">
        <label>
          Surface:
          <input
            type="color"
            name="surface"
            defaultValue={theme.colors[2].value}
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
            defaultValue={theme.colors[3].value}
            required
          />
        </label>
      </div>
      <div className="theme-form-row">
        <label>
          Theme Name:
          <input type="text" name="name" defaultValue={theme.name} required />
        </label>
      </div>
      <button type="submit" className="theme-form-add">
        Add Theme
      </button>
    </form>
  );
}
