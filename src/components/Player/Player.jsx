import React from 'react';
import './Player.css';
import PlayerUpperBody from './PlayerUpperBody';
import PlayerLowerBody from './PlayerLowerBody';

function Player({state}) {
  return (
    <div className="Player-container">
      <PlayerUpperBody/>
      <PlayerLowerBody/>
    </div>
  );
}

export default Player;
