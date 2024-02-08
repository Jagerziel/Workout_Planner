import { createSlice } from "@reduxjs/toolkit";
import { exerciseData } from "../../data/exerciseData.js";

export const customExerciseDataSlice = createSlice({
    name: 'customExerciseData',
    initialState: {
        data: [[], exerciseData]
    },
    reducers: {
        updateCustomExerciseData: (state, action) => {
            state.data = action.payload
        },
        resetCustomExerciseData: (state) => {
            state.data = [[], exerciseData]
        }
    }
})

export const { updateCustomExerciseData, resetCustomExerciseData } = customExerciseDataSlice.actions
export default customExerciseDataSlice.reducer