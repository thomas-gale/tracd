import React from "react";
import DeckGL from "deck.gl/typed";
import { Map } from "react-map-gl";

import { BrumCube } from "./layer/BrumCube";

import "mapbox-gl/dist/mapbox-gl.css";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -1.898575,
  latitude: 52.489471,
  zoom: 20,
  pitch: 0,
  bearing: 0,
};

export const DeckCanvas = () => {
  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
      <Map
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        projection="globe"
      >
        <BrumCube />
      </Map>
    </DeckGL>
  );
};
