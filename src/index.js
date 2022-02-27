import React from 'react';
import ReactDOM from 'react-dom';
//Game engine imports
import { GameEngine } from 'react-game-engine';
//styles
import './index.css';
// components
import { Dog } from './Components/renderer.js';
import { MoveCharacter } from './Components/systems.js';
//assets
import houses from './assets/CityH.png'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <GameEngine style={{width: 800,
     heigth: 600, 
     backgroundImage: `url(${houses})`,
      backgroundSize: "cover",
    }}
    systems ={[MoveCharacter]}
    entities = {{
      mainChar: {x: 200, y: 200, renderer: <Dog/>}
    }}
    >
      

  </GameEngine>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
