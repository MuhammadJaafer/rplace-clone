import { data } from "../data/Data";
import Pixel from "./Pixel";

export default function Canvas({ currentColor }) {
  return (
    <div className="canvas">
      {data.map((p, i) => (
        <Pixel currentColor={currentColor} key={i} index={i} _color={p} />
      ))}
    </div>
  );
}
