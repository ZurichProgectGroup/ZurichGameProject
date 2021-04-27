/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    authApiInstance,
    userApiInstance,
    yaOauthApiInstance,
    themeApiInstance,
} from 'api';
import { StringKeyString } from 'utils/custom_types';
import { mapToUser } from 'utils/mapUser';
import { LoadingStatus } from 'types/common';
import { ThemeEnum } from 'types/Theme';
import { IStoreCTX } from 'store/types';

export const getUsersTheme = createAsyncThunk(
    'account/getUsersTheme',
    (userId: number) => themeApiInstance.getUsersTheme(userId),
);

export const getUser = createAsyncThunk(
    'account/getUser',
    async (_, { dispatch }) => {
        const user = await authApiInstance.update();

        if (user) {
            const { id } = user;

            dispatch(getUsersTheme(id));
        }

        return user;
    },
);

export const login = createAsyncThunk(
    'account/login',
    async (data: StringKeyString, { dispatch }) => {
        await authApiInstance.request(data);

        dispatch(getUser());
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
    async (data: StringKeyString, { dispatch }) => {
        await authApiInstance.create(data);

        dispatch(getUser());
    },
);

export const logout = createAsyncThunk(
    'account/logout',
    async () => {
        await authApiInstance.delete();

        return null;
    },
);

export const setUsersTheme = createAsyncThunk(
    'account/setUsersTheme',
    async (themeId: number, { getState }) => {
        const { account: { user } } = getState() as IStoreCTX;

        if (user) {
            const { id } = user;
            await themeApiInstance.setUsersTheme({ themeId, userId: id });
        }

        return themeId;
    },
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

export const initialState = {
    status: LoadingStatus.idle,
    user: null,
    theme: { id: ThemeEnum.dark },
};

const slice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        logoutSuccess: (state) => {
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
        builder.addCase(login.fulfilled, (state) => {
            state.status = LoadingStatus.succeeded;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.user = null;
        });
        builder.addCase(register.fulfilled, (state) => {
            state.status = LoadingStatus.succeeded;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.status = LoadingStatus.succeeded;
            state.user = mapToUser(action.payload);
        });
        builder.addCase(getUsersTheme.fulfilled, (state, action) => {
            state.theme = action.payload;
        });
        builder.addCase(setUsersTheme.fulfilled, (state, action) => {
            state.theme = { id: action.payload };
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
