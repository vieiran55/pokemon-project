import React from "react";
import { EDirection } from "../../settings/constants";

export function handleNextPosition(direction, position) {
  switch (direction) {

    case EDirection.LEFT:
      return { x: position.x - 1, y: position.y };

    case EDirection.RIGHT:
      return { x: position.x + 1, y: position.y };

    case EDirection.DOWN:
      return { x: position.x, y: position.y + 1 };

    case EDirection.UP:
      return { x: position.x, y: position.y - 1 };

  }
};


export enum ECanvas {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 6,
  HERO = 7,
};

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const TR = ECanvas.TRAP;
const MD = ECanvas.MINI_DEMON;
const DE = ECanvas.DEMON;
const CH = ECanvas.CHEST;
const HR = ECanvas.HERO;

export const canvas = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, CH, MD, FL, WL, FL, FL, FL, FL, WL, FL, WL, FL, FL, FL, FL, WL, WL, FL, WL, FL, FL, FL, FL, FL, WL, WL],
  [WL, FL, FL, WL, WL, WL, WL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, WL],
  [WL, FL, FL, FL, WL, FL, FL, FL, FL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, CH, FL, FL, FL, MD, FL, FL, FL, FL, FL, WL, WL, WL, WL, FL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, TR, TR, TR, FL, FL, FL, WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, WL, WL, WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, WL, FL, FL, WL],
  [WL, FL, FL, FL, WL, FL, FL, WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, WL, FL, FL, WL],
  [WL, FL, FL, WL, WL, FL, DE, FL, FL, FL, FL, DE, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, HR, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
];

export function checkValidMoviment(nextPosition) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x];

  if (canvasValue === ECanvas.WALL) {
    return false;
  }

  if (canvasValue === ECanvas.CHEST) {
    console.log('Pisou no Bau!')
  }

  if (canvasValue === ECanvas.TRAP) {
    console.log('Pisou na Armadilha!')
  }

  return true
}