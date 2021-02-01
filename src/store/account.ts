import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'account',
    initialState: {
        user: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        },
        logoutSuccess: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.user = null;
        },
    },
});

export default slice.reducer;

const { loginSuccess, logoutSuccess } = slice.actions;

export const login = (data:unknown) => async (dispatch:any):Promise<unknown> => {
    try {
        // заглушка
        console.log('!login!!!!', data);
        // await api.post('...', { username, password })
        dispatch(loginSuccess({}));
        return Promise.resolve();
    } catch (e) {
        return console.error(e.message);
    }
};

export const logout = () => async (dispatch:any):Promise<unknown> => {
    try {
    // await api.post('...logout/')
        return dispatch(logoutSuccess());
    } catch (e) {
        return console.error(e.message);
    }
};
