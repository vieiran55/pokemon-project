import React from "react";
import { HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";

import './index.css';

const Trap = () => {
    return (
        <div
        style={{
            position: 'absolute',  
            bottom: TILE_SIZE * 8,
            left: TILE_SIZE * 10,
            width: TILE_SIZE,
            height: TILE_SIZE,
            backgroundImage: "url(./assets/TRAP.png)" ,
            backgroundRepeat: "no-repeat",
            //backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: 'trap-animation 1s steps(8) infinite'
            
         }}
        />
    )
};

export default Trap;