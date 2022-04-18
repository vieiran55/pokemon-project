import React from "react";
import { GAME_SIZE, GAME_SIZEH } from "../../settings/constants";
import Chest from "../Chest";
import Demon from "../Demon";
import Hero from "../Hero";
import MiniDemon from "../MiniDemon";
import Trap from "../TRAP";


const Board = () => {
    return (
        <div>
        <Hero />
        <Demon />
        <Chest />
        <Trap />
        <MiniDemon />
        <img src="./assets/background.png" alt="" width={GAME_SIZE} height={GAME_SIZEH}/>
        </div>
        
    );
}

export default Board;