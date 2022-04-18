import React from "react";
import { TILE_SIZE } from "../../settings/constants";

import './index.css';

const Hero = () => {
    return (
        <div
        style={{
            position: 'absolute',  
            bottom: 35 * 13,
            left: 35 * 19,
            width: TILE_SIZE,
            height: 100,
            backgroundImage: "url(./assets/ash.png)" ,
            backgroundRepeat: "no-repeat",
            animation: 'hero-animation 1s steps(2) infinite'
            
         }}
        />
    )
};

export default Hero;