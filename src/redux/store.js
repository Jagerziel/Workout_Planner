import { configureStore } from "@reduxjs/toolkit"

import homeDirectoryReducer from "./reducers/homeDirectoryReducer";
import twelveWkDirectoryReducer from "./reducers/twelveWkDirectoryReducer";

export const store = configureStore({
    reducer: {
        homeDirectory: homeDirectoryReducer,
        twelveWkDirectory: twelveWkDirectoryReducer,
    },
  });