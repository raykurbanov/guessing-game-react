import "./App.css";
import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState(null);
  const [options, setOptions] = useState([]);

  return (
    <div className="App">
      <div
        className="colorContainer"
        style={{ backgroundColor: { currentColor } }}
      ></div>
      <div className="buttons"></div>
    </div>
  );
}

export default App;
