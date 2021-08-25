import React from 'react';

import Spot from './Spot';

const MineField = (props) => (
  <div className="mine-field">
    {props.spots.map(spot => (
      <Spot isRevealed={spot.isRevealed} hasMine={spot.hasMine} />
    ))}
  </div>
);

export default MineField;
