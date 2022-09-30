import React, { useMemo } from "react";
import DeckGL, { SimpleMeshLayer } from "deck.gl/typed";
import { Map } from "react-map-gl";

import { BrumCube } from "./layer/BrumCube";

import "mapbox-gl/dist/mapbox-gl.css";
import {
  CreateSimpleCubeMeshLayer,
  CreateSimpleGlbMeshLayer,
} from "./layer/SimpleMeshLayer";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -1.898575,
  latitude: 52.489471,
  zoom: 20,
  pitch: 0,
  bearing: 0,
};

export const DeckCanvas = () => {
  const simpleCubeMeshLayer = useMemo(
    () =>
      CreateSimpleCubeMeshLayer([
        {
          position: [-1.898575, 52.4896],
          angle: 0,
          color: [255, 0, 0],
        },
      ]),
    []
  );

  const simpleGlbMeshLayer1 = useMemo(
    () =>
      CreateSimpleGlbMeshLayer("/geometry/factory_room.glb", [
        {
          position: [-1.898575, 52.4897],
          angle: 0,
          color: [255, 0, 0],
        },
      ]),
    []
  );

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[simpleCubeMeshLayer, simpleGlbMeshLayer1]}
    >
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
