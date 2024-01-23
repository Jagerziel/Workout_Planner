import { createSlice } from "@reduxjs/toolkit";
import { exerciseData } from "../../data/exerciseData.js";

export const exerciseDataSlice = createSlice({
    name: 'exerciseData',
    initialState: {
        data: exerciseData
    },
    reducers: {
        updateExerciseData: (state, action) => {
            state.data = action.payload
        },
        resetExerciseData: (state) => {
            state.data = exerciseData
        }
    }
})

export const { updateExerciseData, resetExerciseData } = exerciseDataSlice.actions
export default exerciseDataSlice.reducer