import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MapState {
  selectedEntityId: number | undefined;
  focusedCoordinate: [number, number];
}

const initialState: MapState = {
  // TODO - will one drive the other?
  selectedEntityId: undefined,
  focusedCoordinate: [-1.898575, 52.4898],
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setSelectedEntityId: (state, action: PayloadAction<number | undefined>) => {
      state.selectedEntityId = action.payload;
    },
    setFocusedCoordinate: (state, action: PayloadAction<[number, number]>) => {
      state.focusedCoordinate = action.payload;
    },
  },
});

export const { setSelectedEntityId, setFocusedCoordinate } = mapSlice.actions;
export default mapSlice.reducer;
