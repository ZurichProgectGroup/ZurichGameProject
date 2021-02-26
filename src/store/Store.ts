import { configureStore } from '@reduxjs/toolkit';
import getInitialState from 'store/getInitialState';
import leaderboardReducer from './leaderboard';
import accountReducer from './account';
import gameReducer from './game';

const rootReducer = {
    account: accountReducer,
    game: gameReducer,
    leaderboard: leaderboardReducer,
};

const initialState = getInitialState();

export default function configureAppStore(preloadedState = initialState) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}
