import { createSlice } from "@reduxjs/toolkit";

export const homeDirectorySlice = createSlice({
    name: 'homeDirectory',
    initialState: {
        data: {}
    },
    reducers: {
        updateHomeDirectory: (state, action) => {
            state.data = action.payload
        },
        resetHomeDirectory: (state) => {
            state.data = {}
        }
    }
})

export const { updateHomeDirectory, resetHomeDirectory } = homeDirectorySlice.actions
export default homeDirectorySlice.reducer