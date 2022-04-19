import useEventListener from '@use-it/event-listener';
import React from "react";
import { transform } from 'typescript';
import useHeroMoviment from '../../hooks/useHeroMoviment';

import { EDirection, TILE_SIZE } from "../../settings/constants";

import './index.css';

const initialPosition = {
  x: 19,
  y: 0
}

const Hero = () => {
  const { position, direction} = useHeroMoviment(initialPosition)

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: 53,
        backgroundImage: "url(./assets/ash.png)",
        backgroundRepeat: "no-repeat",
        animation: 'hero-animation 1s steps(2) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}
    />
  )
};

export default Hero;