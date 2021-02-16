import { createSelector } from 'reselect';
import { IStoreCTX } from 'Store';
import mapToLeaderboard from 'Utils/mapToLeaderboard';

const userSelector = (state: IStoreCTX) => state.account.user;
const leaderboardSelector = (state: IStoreCTX) => state.leaderboard;
const gameSelector = (state: IStoreCTX) => state.game;

export const selectUser = createSelector(
    userSelector,
    (user) => user,
);

export const selectLeaderboardList = createSelector(
    [leaderboardSelector, userSelector],
    (board, user) => (user ? mapToLeaderboard(board.list, user.id) : []),
);

export const selectCurrentGameScore = createSelector(
    [gameSelector],
    (game) => game.currentScore,
);

export default {
    selectUser,
};
