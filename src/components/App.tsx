import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board/'
import { GAME_SIZE, GAME_SIZEH } from '../settings/constants';

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
        <Board />
      </div>
    </div>
  );
}

export default App;
