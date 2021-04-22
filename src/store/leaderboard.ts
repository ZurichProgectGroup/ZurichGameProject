import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LeaderboardApi, { TLeaderItemDTO } from 'Api/LeaderboardApi';

export const getLeaderboard = createAsyncThunk(
    'leaderboard/fetchByIdStatus',
    () => (
        LeaderboardApi.getResults()
    ),
);
interface LeaderboardState {
    list: TLeaderItemDTO[],
    isLoading: boolean,
}

const leaderBoardInitialState: LeaderboardState = {
    list: [],
    isLoading: false,
};

const slice = createSlice({
    name: 'leaderboard',
    initialState: leaderBoardInitialState,
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
