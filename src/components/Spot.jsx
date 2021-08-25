import React from 'react';

export default (props) => (
  <div
    className={`spot-area ${props.hasMine && '-mine'} ${props.isRevealed && '-revealed'}`}
    onClick={() => { props.clickHandler(props.id) }}
  ></div>
);
