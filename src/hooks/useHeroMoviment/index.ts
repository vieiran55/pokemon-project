import useEventListener from '@use-it/event-listener';
import React from "react";
import { handleNextPosition } from '../../contexts/canvas/helpers';
import { EDirection } from '../../settings/constants';


function useHeroMoviment(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: { key: any; }) => {
    const direction = event.key;

    const nextPosition = handleNextPosition(direction, positionState);
    updatePositionState(nextPosition);
    updateDirectionState(direction);
  })

  return {
    position: positionState,
    direction: direction,
  }
};

export default useHeroMoviment;