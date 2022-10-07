import React, { useMemo } from "react";
import DeckGL from "deck.gl/typed";
import { Map } from "react-map-gl";
import {
  CreateSimpleCubeMeshLayer,
  CreateSimpleLoadedMeshLayer,
} from "./layer/SimpleMeshLayer";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { setViewState } from "../../state/map/mapslice";
import { ViewState } from "../../types/map/ViewState";
import "mapbox-gl/dist/mapbox-gl.css";

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
