import { colors } from "../data/Data";

export default function ColorPicker({ setCurrentColor, currentColor }) {
  return (
    <div className="color-picker">
      {colors.map((c, i) => (
        <div
          onClick={() => setCurrentColor(c)}
          key={i}
          className={`color ${currentColor === c ? "active" : ""}`}
          style={{ background: c }}
        ></div>
      ))}
    </div>
  );
}
