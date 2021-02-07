import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApiInstance } from 'Api';
import { StringKeyString } from 'Utils/custom_types';

export const login = createAsyncThunk(
    "account/login",
    async (data:StringKeyString) => {
        await authApiInstance.request(data);
        const user = await authApiInstance.update();
        return user;
    }
);

export const register = createAsyncThunk(
    "account/register",
    async (data:StringKeyString) => {
        await authApiInstance.create(data);
        const user = await authApiInstance.update();
        return user;
    }
);

export const logout = createAsyncThunk(
    "account/logout",
    async () => {
        await authApiInstance.delete();
        return null;
    }
);

export const getUser = createAsyncThunk(
    "account/getUser",
    async () => {
        const res = await authApiInstance.update();
        return res;
    }
);

enum ACCOUNT_STATUS {
    idle = "idle",
    loading = "loading",
    succeeded = "succeeded",
    failed = "failed"
}

const slice = createSlice({
    name: 'account',
    initialState: {
        status: ACCOUNT_STATUS.idle,
        user: null,
    },
    reducers: {
        //
    },
    extraReducers:builder  =>{
        builder.addCase(login.pending, (state, action) => {
          state.status = ACCOUNT_STATUS.loading;
        })
        builder.addCase(register.pending, (state, action) => {
          state.status = ACCOUNT_STATUS.loading;
        })
        builder.addCase(getUser.pending, (state, action) => {
          state.status = ACCOUNT_STATUS.loading;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = ACCOUNT_STATUS.succeeded;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.status = ACCOUNT_STATUS.succeeded;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.status = ACCOUNT_STATUS.succeeded;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.status = ACCOUNT_STATUS.failed;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        })
        builder.addCase(register.rejected, (state, action) => {
            state.status = ACCOUNT_STATUS.failed;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.status = ACCOUNT_STATUS.failed;
            // eslint-disable-next-line no-param-reassign
            state.user = action.payload;
        })
  }
});

export default slice.reducer;
