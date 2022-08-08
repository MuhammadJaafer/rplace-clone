import { useAppContext } from "../hooks/useAppContext";
import Pixel from "./Pixel";
export default function Canvas() {
  const { canvas } = useAppContext();
  return (
    <div className="canvas">
      {canvas.map((p, i) => (
        <Pixel key={i} index={i} _color={p} />
      ))}
    </div>
  );
}
