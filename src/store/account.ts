import { createSlice } from '@reduxjs/toolkit';
import {authApiInstance} from 'Api/ApiInstances';
import {stringKeyString} from 'Utils/custom_types';

const slice = createSlice({
  name: 'account',
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
        console.log("action.payload", action.payload);
        state.user = action.payload;
    },
    logoutSuccess: (state, action) =>  {
      state.user = null;
    },
  },
});

export default slice.reducer

const { loginSuccess, logoutSuccess } = slice.actions

export const login = (data:stringKeyString) =>  async (dispatch:any):Promise<unknown>  => {

  try {

    await authApiInstance.request(data);
    let user = await authApiInstance.update();
    dispatch(loginSuccess(user.response));
  } catch (e) {
    return console.error(e.message);
  }

}

export const register = (data:stringKeyString) =>  async (dispatch:any):Promise<unknown>  => {

 try {
    await authApiInstance.create(data);
    let user = await authApiInstance.update();
    dispatch(loginSuccess(user.response));
    return user;
  } catch (e) {
    return console.error(e.message);
  }

}

export const logout = () => async (dispatch:any):Promise<unknown>  => {
  try {
    await authApiInstance.delete();
    dispatch(logoutSuccess({}))
  } catch (e) {
    return console.error(e.message);
  }
}


export const getUser = () =>  async (dispatch:any):Promise<unknown>  => {

  try {

    let res = await authApiInstance.update();
    dispatch(loginSuccess(res.response));
  } catch (e) {
    return console.error(e.message);
  }

}
