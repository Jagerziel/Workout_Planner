import { configureStore } from "@reduxjs/toolkit"

import exerciseDataReducer from "./reducers/exerciseDataReducer";
import homeDirectoryReducer from "./reducers/homeDirectoryReducer";
import twelveWkDirectoryReducer from "./reducers/twelveWkDirectoryReducer";

export const store = configureStore({
    reducer: {
        exerciseData: exerciseDataReducer,
        homeDirectory: homeDirectoryReducer,
        twelveWkDirectory: twelveWkDirectoryReducer,
    },
  });