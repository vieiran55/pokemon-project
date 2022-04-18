import React from "react";
import { HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";

import './index.css';

const Chest = () => {
    return (
        <div
        style={{
            position: 'absolute',  
            bottom: TILE_SIZE * 8,
            left: TILE_SIZE * 8,
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