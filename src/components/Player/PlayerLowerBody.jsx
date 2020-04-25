import React from 'react';
import Sprite from 'components/Sprites/Sprites';
import lowerBodySpriteSheet from 'assets/Legs0.png'

function PlayerLowerBody() {
  const frames = [
    {
      state: 'idel',
      image: lowerBodySpriteSheet
    }
  ];
  return (
    <Sprite
      width={96}
      height={55}
      frames={frames}
      frameNumber={1}
      offsetY={-56}
      layer={0}
    />
  );
}

export default PlayerLowerBody;