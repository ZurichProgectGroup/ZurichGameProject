import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'account',
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
        state.user = action.payload;
    },
    logoutSuccess: (state, action) =>  {
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
