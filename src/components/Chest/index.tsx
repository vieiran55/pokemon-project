import React from "react";
import { HEAD_OFFSET, TILE_SIZE, TILE_SIZELEFT, TILE_SIZETOP } from "../../settings/constants";

import './index.css';

interface IProps {
  initialPosition: { x: number, y: number}
}

const Chest = (props: IProps) => {
    return (
        <div
        style={{
            position: 'absolute',  
            top: TILE_SIZETOP * props.initialPosition.y,
            left: TILE_SIZELEFT * props.initialPosition.x,
            width: TILE_SIZE,
            height: TILE_SIZE,
            backgroundImage: "url(./assets/CHEST.png)" ,
            backgroundRepeat: "no-repeat",
            //backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: 'chest-animation 1s steps(3) infinite'
            
         }}
        />
    )
};

export default Chest;