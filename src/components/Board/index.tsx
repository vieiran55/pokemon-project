import React from "react";
import { GAME_SIZE } from "../../settings/constants";
import Hero from "../Hero";


const Board = () => {
    return (
        <div>
        <Hero />
        <img src="./assets/background.png" alt="" width={GAME_SIZE} />
        </div>
        
    );
}

export default Board;