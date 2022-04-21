import React from "react";
import { ChestsContext } from "../../contexts/chests";
import { HEAD_OFFSET, TILE_SIZE, TILE_SIZELEFT, TILE_SIZETOP } from "../../settings/constants";

import './index.css';

interface IProps {
  initialPosition: { x: number, y: number }
}

const Chest = (props: IProps) => {
  const chestsContext = React.useContext(ChestsContext);

  const shouldAnimate = chestsContext.openedChests.positions.find((position) => {
    const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x
    return match;
  })

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZETOP * props.initialPosition.y,
        left: TILE_SIZELEFT * props.initialPosition.x,
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundImage: "url(./assets/CHEST.png)",
        backgroundRepeat: "no-repeat",
        //backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        // colocar aqui o modal
        animation: shouldAnimate && 'chest-animation 1s steps(3) fowards'

      }}
    />
  )
};

export default Chest;