import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'account',
    initialState: {
        user: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
        /* eslint-disable */ //changed in the other branch, just hide the linter
        state.user = action.payload;
    },
    /* eslint-disable */ //changed in the other branch, just hide the linter

    logoutSuccess: (state, /*action*/) =>  {
        /* eslint-disable */ //changed in the other branch, just hide the linter

      state.user = null;
    },
  },
});

export default slice.reducer

const { loginSuccess, logoutSuccess } = slice.actions

export const login = (data:unknown) =>  async (dispatch:any):Promise<unknown>  => {
  try {
      //заглушка
      console.log("!login!!!!", data);
    // await api.post('...', { username, password })
    dispatch(loginSuccess({}));
  } catch (e) {
    return console.error(e.message);
  }

}

export const logout = () => async (dispatch:any):Promise<unknown>  => {
  try {
    // await api.post('...logout/')
    return dispatch(logoutSuccess({}))
  } catch (e) {
    return console.error(e.message);
  }
}
