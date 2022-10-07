import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { View } from "deck.gl/typed";
import { ViewState } from "react-map-gl";

interface MapState {
  selectedEntityId: number | undefined;
  viewState: ViewState;
}

const initialState: MapState = {
  selectedEntityId: undefined,
  viewState: {
    longitude: -1.898575,
    latitude: 52.489471,
    zoom: 20,
    pitch: 0,
    bearing: 0,
    padding: {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    },
  },
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setSelectedEntityId: (state, action: PayloadAction<number | undefined>) => {
      state.selectedEntityId = action.payload;
    },
    setViewState: (state, action: PayloadAction<ViewState>) => {
      state.viewState = action.payload;
    },
  },
});

export const { setSelectedEntityId, setViewState } = mapSlice.actions;
export default mapSlice.reducer;
