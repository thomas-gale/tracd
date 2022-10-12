import React from "react";
import DeckGL from "deck.gl/typed";
import { Map } from "react-map-gl";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { setViewState } from "../../state/map/mapslice";
import { ViewState } from "../../types/map/ViewState";
import { useProcessNodeMeshLayer } from "../../hooks/viewport/useProcessNodeMeshLayer";
import { useMatterNodeMeshLayer } from "../../hooks/viewport/useMatterNodeMeshLayer";
import "mapbox-gl/dist/mapbox-gl.css";

export const DeckCanvas = () => {
  const viewState = useAppSelector((state) => state.map.viewState);
  const dispatch = useAppDispatch();
  const processNodeMeshLayer = useProcessNodeMeshLayer();
  const matterNodeMeshLayer = useMatterNodeMeshLayer();

  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={({ viewState }) => {
        dispatch(
          setViewState({
            longitude: viewState.longitude,
            latitude: viewState.latitude,
            zoom: viewState.zoom,
            pitch: viewState.pitch,
            bearing: viewState.bearing,
          })
        );
        return viewState;
      }}
      controller={true}
      layers={[processNodeMeshLayer, matterNodeMeshLayer]}
    >
      <Map
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        projection="globe"
      ></Map>
    </DeckGL>
  );
};
