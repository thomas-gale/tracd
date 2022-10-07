import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViewState } from "../../types/map/ViewState";

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
