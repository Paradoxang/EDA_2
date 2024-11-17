// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementBy: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { incrementBy, decrement } = counterSlice.actions;
export default counterSlice.reducer;
