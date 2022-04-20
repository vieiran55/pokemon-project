import React from "react";
import { ECanvas } from "../../../contexts/canvas/helpers";

interface IProps {
  position: { x: number; y: number };
  text: number;
}


function Tile(props: IProps) {
  function getTileColor() {
    switch (props.text) {
      case ECanvas.FLOOR:
        return 'green';

      case ECanvas.WALL:
        return 'yellow';

      case ECanvas.DOOR:
        return 'white';

      case ECanvas.TRAP:
        return 'purple';

      case ECanvas.MINI_DEMON:
        return 'red';

      case ECanvas.DEMON:
        return 'red';

      case ECanvas.CHEST:
        return 'cyan';

      case ECanvas.HERO:
        return 'white';

    }
  }

  const color = getTileColor();
  return (
    <div style={{
      position: 'absolute',
      left: 47 * props.position.x,
      top: 54 * props.position.y,
      width: 47,
      height: 54,
      color: color,
      border: `2px solid ${color}`,
      fontSize: 32,
      zIndex: 2,
    }}>
      {props.text}
    </div>
  )
}

export default Tile;
