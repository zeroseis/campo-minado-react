import React, { useState } from 'react';
import './App.css';
import MineField from './components/MineField';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [spots, setSpots] = useState([
    { id: 1, hasMine: true, isRevealed: false },
    { id: 2, hasMine: false, isRevealed: false },
    { id: 3, hasMine: false, isRevealed: false },
    { id: 4, hasMine: true, isRevealed: false },
    { id: 5, hasMine: false, isRevealed: false },
    { id: 6, hasMine: true, isRevealed: false },
    { id: 7, hasMine: false, isRevealed: false },
    { id: 8, hasMine: false, isRevealed: false },
    { id: 9, hasMine: true, isRevealed: false },
  ]);

  const revealSpot = (id) => {
    setSpots(
      spots.map(spot => {
        if (spot.id !== id) return spot;
        return {
          id: spot.id,
          hasMine: spot.hasMine,
          isRevealed: true,
        }
      })
    );
  }

  return (
    <>
      <h1>Campo Minado</h1>
      <MineField
        spots={spots}
        clickHandler={revealSpot}
      />
      <ScoreBoard />
    </>
  );
}

export default App;
