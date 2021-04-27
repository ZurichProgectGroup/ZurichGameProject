import { initialState as account } from 'store/account';
import { initialState as leaderboard } from 'store/leaderboard';
import { initialState as game } from 'store/game';
import { initialState as topic } from 'store/topic';
import { initialState as topics } from 'store/topics';
import { IStoreCTX } from './types';

function getInitialState(): IStoreCTX {
    return {
        account,
        game,
        leaderboard,
        topic,
        topics,
    };
}

export default getInitialState;
