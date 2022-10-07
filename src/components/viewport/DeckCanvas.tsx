import React from "react";
import DeckGL from "deck.gl/typed";
import { Map } from "react-map-gl";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { setViewState } from "../../state/map/mapslice";
import { ViewState } from "../../types/map/ViewState";
import { useWorkflowNodeMeshLayer } from "../../hooks/viewport/useWorkflowNodeMeshLayer";
import "mapbox-gl/dist/mapbox-gl.css";

export const DeckCanvas = () => {
  const viewState = useAppSelector((state) => state.map.viewState);
  const dispatch = useAppDispatch();
  const workflowNodeMeshLayer = useWorkflowNodeMeshLayer();

  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={({ viewState }) => {
        dispatch(setViewState(viewState as ViewState));
        return viewState;
      }}
      controller={true}
      layers={[workflowNodeMeshLayer]}
    >
      <Map
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        projection="globe"
      ></Map>
    </DeckGL>
  );
};
