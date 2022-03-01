import React from "react";
import ReactDOM from "react-dom";
//Game engine imports
import { GameEngine } from "react-game-engine";
//styles
import "./index.css";
// components
import { Dog } from "./Components/renderer.js";
import { MoveCharacter } from "./Components/systems.js";
//assets
 import houses from "./assets/CityH.png";
import reportWebVitals from "./reportWebVitals";

const width = 800;
const height = 600;

const styles = {
  width: width,
  height: height,
  backgroundImage: `url(${houses})`,
  backgroundSize: "cover",
};
const entities = {
  mainChar: { x: width / 2, y: height / 2, renderer: <Dog /> },
};

ReactDOM.render(
  <React.StrictMode>
    <GameEngine
      style={styles}
      systems={[MoveCharacter]}
      entities={entities}
    ></GameEngine>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
