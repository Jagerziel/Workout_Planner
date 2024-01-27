import { configureStore } from "@reduxjs/toolkit"

import exerciseDataReducer from "./reducers/exerciseDataReducer";
import homeDirectoryReducer from "./reducers/homeDirectoryReducer";
import sixteenWkDirectoryReducer from "./reducers/sixteenWkDirectoryReducer";

export const store = configureStore({
    reducer: {
        exerciseData: exerciseDataReducer,
        homeDirectory: homeDirectoryReducer,
        sixteenWkDirectory: sixteenWkDirectoryReducer,
    },
  });