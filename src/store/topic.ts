/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ForumApi from 'Api/ForumApi';
import { CommentCreate } from 'types/Comment';
import { IStoreCTX } from 'store/types';

export const getTopic = createAsyncThunk(
    'topic/getTopic',
    (id: number) => ForumApi.getTopic(id),
);

export const createComment = createAsyncThunk(
    'topic/createComment',
    async (data: CommentCreate, { dispatch }) => {
        await ForumApi.createComment(data);

        dispatch(getTopic(data.topicId));
    },
);

export const getReplies = createAsyncThunk(
    'topic/getReplies',
    (id: number) => ForumApi.getReplies(id),
);

const slice = createSlice({
    name: 'topic',
    initialState: {
        topic: {},
        comments: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTopic.pending, (state: IStoreCTX['topic']) => {
            state.isLoading = true;
            state.comments = [];
        });
        builder.addCase(getTopic.fulfilled, (state: IStoreCTX['topic'], { payload }) => {
            const { comments, ...topic } = payload;
            state.topic = topic;
            state.comments = comments;

            state.isLoading = false;
        });
        builder.addCase(createComment.pending, (state: IStoreCTX['topic']) => {
            state.isLoading = true;
        });
        builder.addCase(createComment.fulfilled, (state: IStoreCTX['topic']) => {
            state.isLoading = false;
        });
        builder.addCase(getReplies.fulfilled, (state: IStoreCTX['topic'], { payload, meta }) => {
            const commentId = meta.arg;
            const { comments } = state;
            const idx = comments.findIndex(({ id }) => id === commentId);

            state.comments[idx].children = payload;
        });
    },
});

export default slice.reducer;
