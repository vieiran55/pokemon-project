import React from "react";
import { canvas, ECanvas } from "../../contexts/canvas/helpers";
import { ChestsContext } from "../../contexts/chests";
import { GAME_SIZE, GAME_SIZEH } from "../../settings/constants";
import Chest from "../Chest";
import Demon from "../Demon";
import Hero from "../Hero";
import MiniDemon from "../MiniDemon";
import Trap from "../TRAP";

function getCanvasMap() {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      if (text === ECanvas.TRAP) {
        array.push(<Trap key={key} initialPosition={position} />)
      }

      if (text === ECanvas.MINI_DEMON) {
        array.push(<MiniDemon key={key} initialPosition={position} />)
      }

      if (text === ECanvas.DEMON) {
        array.push(<Demon key={key} initialPosition={position} />)
      }

      if (text === ECanvas.CHEST) {
        array.push(<Chest key={key} initialPosition={position} />)
      }

      if (text === ECanvas.HERO) {
        array.push(<Hero key={key} initialPosition={position} />)
      }

    }
  }

  return array;
}

const elements = getCanvasMap();

const Board = () => {
  const chestsContext = React.useContext(ChestsContext);

  function renderOpenedDoor(){
    return (
    <img src="./assets/modal_capture.png" alt="" style={{
      position: "absolute",
      bottom: "151px",
      left:   "500px",
      height: "600px",
      width:  "274px",
     }}  />
    )
  }

  return (
    <div>
      {elements}

      {/* {
        chestsContext.totalChests === chestsContext.openedChests.total && (
          <img src="./assets/modal_capture.png" alt="" style={{
            position: "absolute",
            bottom: "151px",
            left:   "500px",
            height: "600px",
            width:  "274px",
           }}  />
        )
      } */}

      {chestsContext.totalChests === chestsContext.openedChests.total && (
        renderOpenedDoor ()
      )}
      
      <img src="./assets/background.png" alt="" width={GAME_SIZE} height={GAME_SIZEH} />
    </div>

  );
}

export default Board;