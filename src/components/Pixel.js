import { useState } from "react";

export default function Pixel({ _color, i, currentColor }) {
  const [color, setColor] = useState(_color);
  const [index, setIndex] = useState(i);
  const changeColor = (e) => {
    e.preventDefault();
    setColor(currentColor);
  };
  return (
    <div
      onClick={changeColor}
      className="pixel "
      index={index}
      style={{ background: color }}
    ></div>
  );
}
