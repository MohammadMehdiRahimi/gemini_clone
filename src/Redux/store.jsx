// store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./changeTheme/themeReducer";
import geminiResponseReducer from "./geminiResponse/geminiResponseReducer";

const store = configureStore({
  reducer: {
    themeState: themeReducer,
    responseState: geminiResponseReducer,
  },
  devTools: true,
});

export default store;
