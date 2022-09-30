import React, { useMemo } from "react";
import DeckGL, { SimpleMeshLayer } from "deck.gl/typed";
import { Map } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import {
  CreateSimpleCubeMeshLayer,
  CreateSimpleLoadedMeshLayer,
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
          position: [-1.898575, 52.4898],
          angle: 0,
          color: [255, 0, 0],
        },
      ]),
    []
  );

  const simpleLoadedMeshLayer = useMemo(
    () =>
      CreateSimpleLoadedMeshLayer([
        {
          position: [-1.898575, 52.489471],
          angle: 0,
          color: [200, 200, 200],
        },
      ]),
    []
  );

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[simpleCubeMeshLayer, simpleLoadedMeshLayer]}
    >
      <Map
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        projection="globe"
      ></Map>
    </DeckGL>
  );
};
