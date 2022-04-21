import useEventListener from '@use-it/event-listener';
import React from "react";
import { transform } from 'typescript';
import useHeroMoviment from '../../hooks/useHeroMoviment';

import { EDirection, TILE_SIZE, TILE_SIZELEFT, TILE_SIZETOP } from "../../settings/constants";

import './index.css';

interface IProps {
  initialPosition: { x: number, y: number}
}

const HeroSearch = (props: IProps) => {
  const { position, direction} = useHeroMoviment(props.initialPosition)

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZETOP * position.y,
        left: TILE_SIZELEFT * position.x,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/ash_search.png)",
        backgroundRepeat: "no-repeat",
        animation: 'hero-search-animation 1s steps(2) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}
    />
  )
};

export default HeroSearch;