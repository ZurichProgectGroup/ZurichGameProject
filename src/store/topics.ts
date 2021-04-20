/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ForumApi from 'Api/ForumApi';
import { StringKeyString } from 'utils/custom_types';

export const getTopics = createAsyncThunk(
    'topics/getTopics',
    () => (
        ForumApi.getTopics()
    ),
);

export const createTopic = createAsyncThunk(
    'topics/createTopic',
    async (data: StringKeyString) => {
        await ForumApi.createTopic(data);
    },
);

const slice = createSlice({
    name: 'topics',
    initialState: {
        list: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTopics.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTopics.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.list = payload;
        });
    },
});

export default slice.reducer;
