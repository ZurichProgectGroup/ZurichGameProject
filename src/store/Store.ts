import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboard';
import accountReducer from './account';
import gameReducer from './game';
import topicsReducer from './topics';
import topicReducer from './topic';

export default configureStore({
    reducer: {
        account: accountReducer,
        game: gameReducer,
        leaderboard: leaderboardReducer,
        topics: topicsReducer,
        topic: topicReducer,
    },
});
