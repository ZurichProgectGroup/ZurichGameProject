import { createSelector } from 'reselect';
import { IStoreCTX } from 'Store';

const userSelector = (state: IStoreCTX) => state.account.user;

export const selectUser = createSelector(
    userSelector,
    (user) => user,
);

export default {
    selectUser,
};
