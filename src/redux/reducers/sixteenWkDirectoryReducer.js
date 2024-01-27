import { createSlice } from "@reduxjs/toolkit";
import { sixteenWkDirectory } from "../../data/data.js";

export const sixteenWkDirectorySlice = createSlice({
    name: 'sixteenWkDirectory',
    initialState: {
        data: sixteenWkDirectory
    },
    reducers: {
        updateSixteenWkDirectory: (state, action) => {
            state.data = action.payload
        },
        resetSixteenWkDirectory: (state) => {
            state.data = sixteenWkDirectory
        }
    }
})

export const { updateSixteenWkDirectory, resetSixteenWkDirectory } = sixteenWkDirectorySlice.actions
export default sixteenWkDirectorySlice.reducer