import React, { useState } from "react";
import "./style.css";

const App = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("click me");

  const bgChange = () => {
    // console.log("click")
    let newBg = "#34995e";
    setBg(newBg);
    setName("ouuch!!");
  };
  const bgBack = () => {
    setBg(purple);
    setName("AYYYOO");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>
          {" "}
          {name}
        </button>
      </div>
    </>
  );
};

export default App;
