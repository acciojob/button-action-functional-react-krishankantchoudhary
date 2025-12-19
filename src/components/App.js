import React, {Component, useState} from "react";
import "./../styles/App.css";
import Dis from "./Dis";

function App() {
  const[display,setDisplay]=useState("");

  const handleClick=()=>{
    setDisplay(<Dis/>)
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>Click</button>
      <div>{display}</div>
    </div>
  );
}
export default App;
