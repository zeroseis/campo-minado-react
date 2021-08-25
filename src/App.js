import './App.css';

import MineField from './components/MineField';

function App() {
  const spots = [
    { hasMine: true, isRevealed: true },
    { hasMine: false, isRevealed: true },
    { hasMine: false, isRevealed: false },
    { hasMine: true, isRevealed: false },
    { hasMine: false, isRevealed: false },
    { hasMine: true, isRevealed: false },
    { hasMine: false, isRevealed: false },
    { hasMine: false, isRevealed: false },
    { hasMine: true, isRevealed: false },
  ];

  return (
    <>
      <h1>Campo Minado</h1>
      <MineField spots={spots} />
    </>
  );
}

export default App;
