import React from "react";

import './index.css';

const Hero = () => {
    return (
        <div
        style={{
            width: 40,
            height: 100,
            backgroundImage: "url(./assets/ash.png)" ,
            backgroundRepeat: "no-repeat",
            animation: 'hero-animation 1s steps(2) infinite'
         }}
        />
    )
};

export default Hero;