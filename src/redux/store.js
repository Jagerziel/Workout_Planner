import { configureStore } from "@reduxjs/toolkit"

import homeDirectoryReducer from "./reducers/homeDirectoryReducer";

export const store = configureStore({
    reducer: {
        homeDirectory: homeDirectoryReducer,
    },
  });