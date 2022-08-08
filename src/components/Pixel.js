import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";

export default function Pixel({ _color, i }) {
  const [color, setColor] = useState(_color);
  const [index, setIndex] = useState(i);
  const { currentColor } = useAppContext();
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
