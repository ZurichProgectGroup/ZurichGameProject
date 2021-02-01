import { createSlice } from '@reduxjs/toolkit';
import { authApiInstance, userApiInstance } from 'Api';
import { StringKeyString } from 'Utils/custom_types';
import { mapToUser } from 'Utils/mapUser';

const slice = createSlice({
    name: 'account',
    initialState: {
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
});

export default slice.reducer;

const { loginSuccess, logoutSuccess, loginError } = slice.actions;

export const login = (data:StringKeyString) => async (dispatch:any):Promise<unknown> => {
    try {
        await authApiInstance.request(data);
        const user = await authApiInstance.update();
        dispatch(loginSuccess(user));
        return user;
    } catch (e) {
        dispatch(loginError());
        return null;
    }
};

export const register = (data:StringKeyString) => async (dispatch:any):Promise<unknown> => {
    try {
        await authApiInstance.create(data);
        const user = await authApiInstance.update();
        dispatch(loginSuccess(user));
        return user;
    } catch (e) {
        dispatch(loginError());
        return null;
    }
};

export const logout = () => async (dispatch:any):Promise<unknown> => {
    try {
        const res = await authApiInstance.delete();
        dispatch(logoutSuccess());
        return res;
    } catch (e) {
        dispatch(loginError());
        return null;
    }
};

export const getUser = () => async (dispatch:any):Promise<unknown> => {
    try {
        const res = await authApiInstance.update();
        dispatch(loginSuccess(res));
        return res;
    } catch (e) {
        dispatch(loginError());
        return null;
    }
};

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
