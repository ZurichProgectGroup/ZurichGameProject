import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    currentScore: 0,
};

const slice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        resetCurrentScore: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.currentScore = 0;
        },
        addGamePoint: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.currentScore += 1;
        },
    },
});

export default slice.reducer;

export const { addGamePoint, resetCurrentScore } = slice.actions;
