import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'game',
    initialState: {
        currentScore: 123,
    },
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
