import React from "react";
import { TILE_SIZE } from "../../settings/constants";

import './index.css';

const initialPosition = {
    x: 15,
    y: 15
}

const Hero = () => {
    const [positionState, updatePositionState] = React.useState(initialPosition);

    setTimeout(() => {
        const newPosition = {x: 13, y: 8}
        updatePositionState(newPosition)
    }, 2000)

    return (
        <div
        style={{
            position: 'absolute',  
            bottom: TILE_SIZE * positionState.y,
            left: TILE_SIZE * positionState.x,
            width: TILE_SIZE,
            height: 53,
            backgroundImage: "url(./assets/ash.png)" ,
            backgroundRepeat: "no-repeat",
            animation: 'hero-animation 1s steps(2) infinite'
            
         }}
        />
    )
};

export default Hero;