import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LeaderboardApi from 'api/LeaderboardApi';

export const getLeaderboard = createAsyncThunk(
    'leaderboard/fetchByIdStatus',
    () => (
        LeaderboardApi.getResults()
    ),
);

export const initialState = {
    list: [],
    isLoading: false,
    error: null,
};

const slice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        setList: (state, { payload }) => {
            // eslint-disable-next-line no-param-reassign
            state.list = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getLeaderboard.pending, (state) => {
            // eslint-disable-next-line no-param-reassign
            state.isLoading = true;
            // eslint-disable-next-line no-param-reassign
            state.list = [];
            // eslint-disable-next-line no-param-reassign
            state.error = null;
        });
        builder.addCase(getLeaderboard.fulfilled, (state, { payload }) => {
            // eslint-disable-next-line no-param-reassign
            state.isLoading = false;
            // eslint-disable-next-line no-param-reassign
            state.list = payload;
        });
    },
});

export default slice.reducer;

export const { setList } = slice.actions;
