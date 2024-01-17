import { createSlice } from "@reduxjs/toolkit";
import { homeDirectory } from "../../data/data.js";

export const homeDirectorySlice = createSlice({
    name: 'homeDirectory',
    initialState: {
        data: homeDirectory
    },
    reducers: {
        updateHomeDirectory: (state, action) => {
            state.data = action.payload
        },
        resetHomeDirectory: (state) => {
            state.data = homeDirectory
        }
    }
})

export const { updateHomeDirectory, resetHomeDirectory } = homeDirectorySlice.actions
export default homeDirectorySlice.reducer