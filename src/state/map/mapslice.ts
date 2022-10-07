import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViewState } from "../../types/map/ViewState";

interface MapState {
  viewState: ViewState;
}

const initialState: MapState = {
  viewState: {
    longitude: -1.898575,
    latitude: 52.489471,
    zoom: 20,
    pitch: 0,
    bearing: 0,
  },
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setViewState: (state, action: PayloadAction<ViewState>) => {
      state.viewState = action.payload;
    },
  },
});

export const { setViewState } = mapSlice.actions;
export default mapSlice.reducer;
