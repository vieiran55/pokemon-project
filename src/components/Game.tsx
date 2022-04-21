import React from "react";
import CanvasProvider from "../contexts/canvas";
import ChestsProvider, { ChestsContext } from "../contexts/chests";
import Board from "./Board";
import Debugger from "./Debugger";

function Game() {
  return (
    <CanvasProvider>
      <ChestsProvider>
        {/* <Debugger /> */}
        <Board />
      </ChestsProvider>
    </CanvasProvider>
  )
};

export default Game;