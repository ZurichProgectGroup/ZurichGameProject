import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './account';
import gameReducer from './game';

export default configureStore({
    reducer: {
        account: accountReducer,
        game: gameReducer,
    },
});
