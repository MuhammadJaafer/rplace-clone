import { useEffect, useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [currentColor, setCurrentColor] = useState();
  const [ip, setip] = useState(null);
  useEffect(() => {
    fetch(
      "https://ipgeolocation.abstractapi.com/v1/?api_key=5641164e32384fae90647be10109bebf"
    ).then((res) => {
      res.json().then((data) => {
        setip(data.ip_address);
      });
    });
  }, []);
  return (
    <div className="App">
      <h1 className="title">r/Place Clone</h1>
      <Canvas currentColor={currentColor}></Canvas>
      <ColorPicker
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
      />
      <p className="ip">{ip}</p>
    </div>
  );
}

export default App;
