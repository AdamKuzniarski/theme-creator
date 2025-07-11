import "./ColorCard.css";

export default function ColorCard({ role, hex }) {
  return (
    <>
      <div className="color-card">
        <div className="color-card__info">
          <div className="color-card__role">{role}</div>
          <div className="color-card__hex">{hex}</div>
        </div>
        <div
          className="color-card__swatch"
          style={{ backgroundColor: hex }}
        ></div>
      </div>
    </>
  );
}
