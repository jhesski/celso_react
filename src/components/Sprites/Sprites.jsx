import React from 'react';

function Sprite({state, frames = 'assets/Blast0.png', frameNumber=0, width, height, offsetX, offsetY, layer, scale}) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url("${frames[0]?.image}")`,
    backgroundPosition: (width * frameNumber * -1) - (frameNumber + 1),
    position: 'relative',
    top: 0 + offsetY,
    right: 0 + offsetX,
    zIndex: layer
  };
  return (
    <div style={style}/>
  );
}

export default Sprite;
