import React from 'react';
import Sprite from 'components/Sprites/Sprites';
import upperBodySpriteSheet from 'assets/Stand0.png'

function PlayerUpperBody() {
  const frames = [
    {
      state: 'idel',
      image: upperBodySpriteSheet
    }
  ];
  return (
    <Sprite
      width={95}
      height={143}
      frames={frames}
      layer={1}
    />
  );
}

export default PlayerUpperBody;