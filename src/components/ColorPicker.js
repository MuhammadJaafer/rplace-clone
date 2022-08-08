import { useAppContext } from "../hooks/useAppContext";
export default function ColorPicker() {
  const { currentColor, colors, dispatch } = useAppContext();
  return (
    <div className="color-picker">
      {colors.map((c, i) => (
        <div
          onClick={() => dispatch({ type: "CHANGE_CURRENT_COLOR", payload: c })}
          key={i}
          className={`color ${currentColor === c ? "active" : ""}`}
          style={{ background: c }}
        ></div>
      ))}
    </div>
  );
}
