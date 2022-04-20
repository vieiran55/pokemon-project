import useEventListener from '@use-it/event-listener';
import React from "react";
import { checkValidMoviment, handleNextPosition } from '../../contexts/canvas/helpers';
import { EDirection } from '../../settings/constants';


function useHeroMoviment(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);


  useEventListener('keydown', (event: { key: any; }) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }
    
    const nextPosition = handleNextPosition(direction, positionState);
    const isValidMoviment = checkValidMoviment(nextPosition);

    if (isValidMoviment) {
      updatePositionState(nextPosition);
      updateDirectionState(direction);
    }

  });

  return {
    position: positionState,
    direction: direction,
  }
};

export default useHeroMoviment;