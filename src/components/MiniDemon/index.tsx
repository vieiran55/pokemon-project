import React from "react";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";
import { EDirection, HEAD_OFFSET, TILE_SIZE, TILE_SIZELEFT, TILE_SIZETOP } from "../../settings/constants";

import './index.css';

// const moviment = {
//   position: { x: 5, y: 5},
//   direction: EDirection.RIGHT,
// }

interface IProps{
  initialPosition: {x: number; y: number}
}

const MiniDemon = (props: IProps) => {
  const moviment = useEnemyMoviment (props.initialPosition)

    return (
        <div
        style={{
            position: 'absolute',  
            top: TILE_SIZETOP * moviment.position.y - HEAD_OFFSET,
            left: TILE_SIZELEFT * moviment.position.x,
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "url(./assets/MINI-DEMON.png)" ,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: 'mini-demon-animation 1s steps(4) infinite',
            transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            
         }}
        />
    )
};

export default MiniDemon;