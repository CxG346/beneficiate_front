import { createSlice } from "@reduxjs/toolkit";
import { IGeneralConfigState } from "../types/generalConfig";

const initialState: IGeneralConfigState = {
  imagenLogo: "",
  primaryColor: "",
  primaryColor70: "",
  secondaryColor: "",
  secondaryColor70: "",
  tertiaryColor: "",
  title: "",
  frequentQuestions: null,
  questionsAboutMe: null,
  bottonText: "",
  colorButton: "",
  imagenBanner: "",
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
    setGeneralConfig: (state, action) => {
      const {
        imagenLogo,
        primaryColor,
        secondaryColor,
        tertiaryColor,
        title,
        frequentQuestions,
        questionsAboutMe,
        bottonText,
        colorButton,
        imagenBanner,
      } = action.payload;

      state.imagenLogo = imagenLogo;
      state.primaryColor = primaryColor;
      state.primaryColor70 = primaryColor.replace("1)", "0.7)");
      state.secondaryColor = secondaryColor;
      state.secondaryColor70 = secondaryColor.replace("1)", "0.7)");
      state.tertiaryColor = tertiaryColor;
      state.title = title;
      state.frequentQuestions = frequentQuestions;
      state.questionsAboutMe = questionsAboutMe;
      state.bottonText = bottonText;
      state.colorButton = colorButton;
      state.imagenBanner = imagenBanner;
    },
  },
});

export const {
  setPrimaryColor,
  setPrimaryColor70,
  setSecondaryColor,
  setSecondaryColor70,
  setGeneralConfig,
} = generalConfigSlice.actions;

export default generalConfigSlice.reducer;