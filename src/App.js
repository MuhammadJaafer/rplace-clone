import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [currentColor, setCurrentColor] = useState();
  return (
    <div className="App">
      <Canvas currentColor={currentColor}></Canvas>
      <ColorPicker
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
      />
    </div>
  );
}

export default App;
