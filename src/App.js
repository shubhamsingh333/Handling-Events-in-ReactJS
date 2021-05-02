import React, { useState } from "react";
import "./style.css";

const App = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] =useState("click me");

  const bgChange = () => {
    // console.log("click")
    let newBg = "#34995e";
    setBg(newBg);
    setName("ouuch!!");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange}> {name}</button>
      </div>
    </>
  );
};

export default App;
