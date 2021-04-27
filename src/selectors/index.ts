import { createSelector } from 'reselect';
import { IStoreCTX } from 'store';
import mapToLeaderboard from 'utils/mapToLeaderboard';

const userSelector = (state: IStoreCTX) => state.account;
const leaderboardSelector = (state: IStoreCTX) => state.leaderboard;
const topicsSelector = (state: IStoreCTX) => state.topics;
const topicSelector = (state: IStoreCTX) => state.topic;
const gameSelector = (state: IStoreCTX) => state.game;

export const selectUser = createSelector(
    userSelector,
    (state) => state,
);

export const selectLeaderboardList = createSelector(
    [leaderboardSelector, userSelector],
    (board, user) => (user.user ? mapToLeaderboard(board.list, user.user.id) : []),
);

export const selectTopics = createSelector(
    [topicsSelector],
    (topics) => topics,
);

export const selectTopic = createSelector(
    [topicSelector],
    (topic) => topic,
);

export const selectCurrentGameScore = createSelector(
    [gameSelector],
    (game) => game.currentScore,
);

export default {
    selectUser,
};
