/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    authApiInstance,
    userApiInstance,
    yaOauthApiInstance,
} from 'Api';
import { StringKeyString } from 'Utils/custom_types';
import { mapToUser } from 'Utils/mapUser';
import { LoadingStatus } from 'Types/common';

export const login = createAsyncThunk(
    'account/login',
    async (data: StringKeyString) => {
        await authApiInstance.request(data);
        const user = await authApiInstance.update();

        return user;
    },
);

export const yaLogin = createAsyncThunk(
    'account/yaLogin',
    () => {
        yaOauthApiInstance.request();
    },
);

export const register = createAsyncThunk(
    'account/register',
    async (data: StringKeyString) => {
        await authApiInstance.create(data);
        const user = await authApiInstance.update();
        return user;
    },
);

export const logout = createAsyncThunk(
    'account/logout',
    async () => {
        await authApiInstance.delete();

        return null;
    },
);

export const getUser = createAsyncThunk(
    'account/getUser',
    () => authApiInstance.update(),
);

export const checkUserOnStart = createAsyncThunk(
    'account/checkUserOnStart',
    async (data: StringKeyString, { dispatch }) => {
        if (data.code) {
            await yaOauthApiInstance.update(data);
        }

        dispatch(getUser());
    },
);

export const updateProfile = createAsyncThunk(
    'account/updateProfile',
    async (data: StringKeyString) => {
        const {
            avatarFile,
            oldPassword,
            newPassword,
            ...userData
        } = data;

        if (oldPassword && newPassword) {
            await userApiInstance.updatePassword({ oldPassword, newPassword });
        }

        if (avatarFile) {
            const avatarData = new FormData();

            avatarData.append('avatar', avatarFile);

            await userApiInstance.updateAvatar(avatarData);
        }

        return userApiInstance.update(userData);
    },
);

const slice = createSlice({
    name: 'account',
    initialState: {
        status: LoadingStatus.idle,
        user: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.user = mapToUser(action.payload);
        },
        logoutSuccess: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.user = null;
        },
        loginError: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state/* , action */) => {
            state.status = LoadingStatus.loading;
        });
        builder.addCase(register.pending, (state/* , action */) => {
            state.status = LoadingStatus.loading;
        });
        builder.addCase(getUser.pending, (state/* , action */) => {
            state.status = LoadingStatus.loading;
        });
        builder.addCase(updateProfile.pending, (state/* , action */) => {
            state.status = LoadingStatus.loading;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = LoadingStatus.succeeded;
            state.user = mapToUser(action.payload);
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.status = LoadingStatus.succeeded;
            state.user = mapToUser(action.payload);
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.status = LoadingStatus.succeeded;
            state.user = mapToUser(action.payload);
        });
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            state.status = LoadingStatus.succeeded;
            state.user = mapToUser(action.payload);
        });
        builder.addCase(login.rejected, (state, action) => {
            state.status = LoadingStatus.failed;
            state.user = action.payload;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.status = LoadingStatus.failed;
            state.user = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.status = LoadingStatus.failed;
            state.user = action.payload;
        });
        builder.addCase(updateProfile.rejected, (state, action) => {
            state.status = LoadingStatus.failed;
            state.user = action.payload;
        });
    },
});

export default slice.reducer;
