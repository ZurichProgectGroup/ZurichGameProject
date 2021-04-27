import { configureStore } from '@reduxjs/toolkit';
import getInitialState from 'Store/getInitialState';
import leaderboardReducer from './leaderboard';
import accountReducer from './account';
import gameReducer from './game';
import topicsReducer from './topics';
import topicReducer from './topic';

const rootReducer = {
    account: accountReducer,
    game: gameReducer,
    leaderboard: leaderboardReducer,
    topics: topicsReducer,
    topic: topicReducer,
};

const initialState = getInitialState();

export default function configureAppStore(preloadedState = initialState) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}
