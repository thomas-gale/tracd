import React, { useMemo } from "react";
import DeckGL, { SimpleMeshLayer } from "deck.gl/typed";
import { Map, ViewState } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import {
  CreateSimpleCubeMeshLayer,
  CreateSimpleLoadedMeshLayer,
} from "./layer/SimpleMeshLayer";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { setViewState } from "../../state/map/mapslice";

export const DeckCanvas = () => {
  const viewState = useAppSelector((state) => state.map.viewState);
  const dispatch = useAppDispatch();

  const simpleCubeMeshLayer = useMemo(
    () =>
      CreateSimpleCubeMeshLayer([
        {
          position: [-1.898575, 52.489871],
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
      viewState={viewState}
      onViewStateChange={({ viewState }) => {
        dispatch(setViewState(viewState as ViewState));
        return viewState;
      }}
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
