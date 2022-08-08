import { useEffect, useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";
import Popup from "./components/Popup";
import { useAppContext } from "./hooks/useAppContext";
function App() {
  const { user, authIsReady } = useAppContext();
  return (
    authIsReady && (
      <div className="App">
        <h1 className="title">r/Place Clone</h1>
        {user && (
          <>
            <Canvas />
            <ColorPicker />
          </>
        )}
        <Popup />
      </div>
    )
  );
}

export default App;
