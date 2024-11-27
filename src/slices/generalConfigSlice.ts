import { createSlice } from "@reduxjs/toolkit";
import { GeneralConfigState } from "../types/generalConfig";

const initialState: GeneralConfigState = {
  primaryColor: "rgba(110, 78, 255, 1)",
  primaryColor70: "rgba(110, 78, 255, 0.7)",
  secondaryColor: "rgba(46, 49, 146, 1)",
  secondaryColor70: "rgba(46, 49, 146, 0.7)",
};

const generalConfigSlice = createSlice({
  name: "generalConfig",
  initialState,
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
      state.primaryColor70 = action.payload.replace("1)", "0.7)");
    },
    setPrimaryColor70: (state, action) => {
      state.primaryColor70 = action.payload;
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload;
      state.secondaryColor70 = action.payload.replace("1)", "0.7)");
    },
    setSecondaryColor70: (state, action) => {
      state.secondaryColor70 = action.payload;
    },
  },
});

export const {
  setPrimaryColor,
  setPrimaryColor70,
  setSecondaryColor,
  setSecondaryColor70,
} = generalConfigSlice.actions;

export default generalConfigSlice.reducer;