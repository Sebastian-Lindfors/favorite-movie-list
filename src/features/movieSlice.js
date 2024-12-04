import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie: (state, action) => {
            state.push(action.payload)
        },
        removeMovie: (state, action) => {
            return state.filter((movie, index) => index !== action.payload);
        },
        updateMovie: (state, action) => {
            const { index, updatedMovie } = action.payload;
            state[index] = { ...state[index], ...updatedMovie };
        },
    },

})

export const { addMovie, removeMovie, updateMovie } = movieSlice.actions
export default movieSlice.reducer