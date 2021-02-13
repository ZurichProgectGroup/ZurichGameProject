import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApiInstance, userApiInstance } from 'Api';
import { StringKeyString } from 'Utils/custom_types';
import { mapToUser } from 'Utils/mapUser';

export const login = createAsyncThunk(
    'account/login',
    async (data:StringKeyString) => {
        await authApiInstance.request(data);
        const user = await authApiInstance.update();
        return user;
    },
);

export const register = createAsyncThunk(
    'account/register',
    async (data:StringKeyString) => {
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

enum AccountStatus {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed',
}

const slice = createSlice({
    name: 'account',
    initialState: {
        status: AccountStatus.idle,
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
            // eslint-disable-next-line no-param-reassign
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state/* , action */) => {
            // eslint-disable-next-line no-param-reassign
            state.status = AccountStatus.loading;
        });
        builder.addCase(register.pending, (state/* , action */) => {
            // eslint-disable-next-line no-param-reassign
            state.status = AccountStatus.loading;
        });
        builder.addCase(getUser.pending, (state/* , action */) => {
            // eslint-disable-next-line no-param-reassign
            state.status = AccountStatus.loading;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.status = AccountStatus.succeeded;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.status = AccountStatus.succeeded;
            // eslint-disable-next-line no-param-reassign
            state.user = mapToUser(action.payload);
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.status = AccountStatus.succeeded;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.status = AccountStatus.failed;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        });
        builder.addCase(register.rejected, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.status = AccountStatus.failed;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.status = AccountStatus.failed;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        });
    },
});

export default slice.reducer;

// const { loginSuccess, logoutSuccess, loginError } = slice.actions;
const { loginSuccess } = slice.actions;

// export const login = (data:StringKeyString) => async (dispatch:any):Promise<unknown> => {
//     try {
//         await authApiInstance.request(data);
//         const user = await authApiInstance.update();
//         dispatch(loginSuccess(user));
//         return user;
//     } catch (e) {
//         dispatch(loginError());
//         return null;
//     }
// };
//
// export const register = (data:StringKeyString) => async (dispatch:any):Promise<unknown> => {
//     try {
//         await authApiInstance.create(data);
//         const user = await authApiInstance.update();
//         dispatch(loginSuccess(user));
//         return user;
//     } catch (e) {
//         dispatch(loginError());
//         return null;
//     }
// };
//
// export const logout = () => async (dispatch:any):Promise<unknown> => {
//     try {
//         const res = await authApiInstance.delete();
//         dispatch(logoutSuccess());
//         return res;
//     } catch (e) {
//         dispatch(loginError());
//         return null;
//     }
// };
//
// export const getUser = () => async (dispatch:any):Promise<unknown> => {
//     try {
//         const res = await authApiInstance.update();
//         dispatch(loginSuccess(res));
//         return res;
//     } catch (e) {
//         dispatch(loginError());
//         return null;
//     }
// };

export const updateProfile = (data:StringKeyString) => async (dispatch:any):Promise<unknown> => {
    try {
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

        const user = await userApiInstance.update(userData);

        dispatch(loginSuccess(user));
        return user;
    } catch (e) {
        return null;
    }
};
