import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApiInstance, userApiInstance } from 'Api';
import { StringKeyString } from 'Utils/custom_types';
import { mapToUser } from 'Utils/mapUser';

export const login = createAsyncThunk(
    'account/login',
    async (data: StringKeyString) => {
        await authApiInstance.request(data);
        const user = await authApiInstance.update();

        return user;
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
    async () => {
        const res = await authApiInstance.update();
        return res;
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

enum AccountStatus {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed',
}

interface AccountState {
    status: AccountStatus,
    user?: User,
}

const accountInitialState: AccountState = {
    status: AccountStatus.idle,
    user: undefined,
};

const slice = createSlice({
    name: 'account',
    initialState: accountInitialState,
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
            // eslint-disable-next-line no-param-reassign
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state/* , action */) => {
            const newState = state;
            newState.status = AccountStatus.loading;
        });
        builder.addCase(register.pending, (state/* , action */) => {
            const newState = state;
            newState.status = AccountStatus.loading;
        });
        builder.addCase(getUser.pending, (state/* , action */) => {
            const newState = state;
            newState.status = AccountStatus.loading;
        });
        builder.addCase(updateProfile.pending, (state/* , action */) => {
            const newState = state;
            newState.status = AccountStatus.loading;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            const newState = state;
            newState.status = AccountStatus.succeeded;
            newState.user = mapToUser(action.payload as UserDTO);
        });
        builder.addCase(register.fulfilled, (state, action) => {
            const newState = state;
            newState.status = AccountStatus.succeeded;
            newState.user = mapToUser(action.payload as UserDTO);
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            const newState = state;
            newState.status = AccountStatus.succeeded;
            newState.user = mapToUser(action.payload as UserDTO);
        });
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            const newState = state;
            newState.status = AccountStatus.succeeded;
            newState.user = mapToUser(action.payload as UserDTO);
        });
        builder.addCase(login.rejected, (state, action) => {
            const newState = state;
            newState.status = AccountStatus.failed;
            newState.user = action.payload;
        });
        builder.addCase(register.rejected, (state, action) => {
            const newState = state;
            newState.status = AccountStatus.failed;
            newState.user = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            const newState = state;
            newState.status = AccountStatus.failed;
            newState.user = action.payload;
        });
        builder.addCase(updateProfile.rejected, (state, action) => {
            const newState = state;
            newState.status = AccountStatus.failed;
            newState.user = action.payload;
        });
    },
});

export default slice.reducer;
