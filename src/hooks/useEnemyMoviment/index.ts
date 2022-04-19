import useInterval from '@use-it/interval';
import React from "react";
import { handleNextPosition } from '../../contexts/canvas/helpers';
import { EDirection } from '../../settings/constants';


function useEnemyMoviment(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useInterval(function move() {
    var random = Math.floor(Math.random() * 4);
    var directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextMoviment = handleNextPosition(randomDirection, positionState)

    updateDirectionState(randomDirection);
    updatePositionState(nextMoviment);
  }, 2000);

  return {
    position: positionState,
    direction: direction,
  }
};

export default useEnemyMoviment;