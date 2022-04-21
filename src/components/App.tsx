import React from 'react';
import './App.css';
import { GAME_SIZE, GAME_SIZEH } from '../settings/constants';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <div 
      style={{
        position: 'relative',
        width: GAME_SIZE,
        height: GAME_SIZEH,
      }}
      >
      <Game />
      </div>
    </div>
  );
}

export default App;
