import React from 'react';

import Spot from './Spot';

const MineField = (props) => (
  <div className="mine-field">
    {props.spots.map(spot => (
      <Spot
        id={spot.id}
        isRevealed={spot.isRevealed}
        hasMine={spot.hasMine}
        clickHandler={props.clickHandler}
      />
    ))}
  </div>
);

export default MineField;
