import { useState, useEffect } from "react";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  const startTime = 0;
  const endTime = 60;

  return (
    <div className="App">
      {show ? <Timer start={startTime} end={endTime} /> : null}
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"} Timer
      </button>
    </div>
  );
}

export default App;
