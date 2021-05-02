import React, { useState } from "react";
import "./style.css";

const App = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);

  const bgChange = () => {
    // console.log("click")
    let newBg = "#34995e";
    setBg(newBg);
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange}> click me</button>
      </div>
    </>
  );
};

export default App;
