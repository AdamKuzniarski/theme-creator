import { useState, useEffect } from "react";
import "./ColorCard.css";

export default function ColorCard({ role, hex }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchColorData() {
      if (!hex) return; // wenn kein HEX Wert bricht ab

      try {
        const cleanHexValue = hex.replace("#", ""); // entferne des # Zeichen vom HexValue für die API
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
        );

        const colorData = await response.json(); // JSON-Parsing Response von API wird in JavaScript Object umgewandelt
        setData(colorData); //Api Daten sind im Data-Stae gespeichert
      } catch (error) {
        console.error("Fehler bei Laden von FarbDaten", error);
      }
    }
    fetchColorData();
  }, [hex]); // dependancy Array --> useEffect hört auf den hex Wert, wenn der sich ändert wird die useEffect getriggert
  return (
    <>
      <div className="color-card">
        <div className="color-card__info">
          <div className="color-card__role">{role}</div>
          <div className="color-card__hex">{hex}</div>
          {data && <div className="color-card-name">{data.name.value}</div>}
        </div>
        <div className="color-card__swatch" style={{ background: hex }}></div>
      </div>
    </>
  );
}
