import { createSlice } from "@reduxjs/toolkit";
import { twelveWkDirectory } from "../../data/data.js";

export const twelveWkDirectorySlice = createSlice({
    name: 'twelveWkDirectory',
    initialState: {
        data: twelveWkDirectory
    },
    reducers: {
        updateTwelveWkDirectory: (state, action) => {
            state.data = action.payload
        },
        resetTwelveWkDirectory: (state) => {
            state.data = twelveWkDirectory
        }
    }
})

export const { updateTwelveWkDirectory, resetTwelveWkDirectory } = twelveWkDirectorySlice.actions
export default twelveWkDirectorySlice.reducer