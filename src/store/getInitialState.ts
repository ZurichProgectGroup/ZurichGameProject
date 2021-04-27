import { initialState as account } from 'Store/account';
import { initialState as leaderboard } from 'Store/leaderboard';
import { initialState as game } from 'Store/game';
import { initialState as topic } from 'Store/topic';
import { initialState as topics } from 'Store/topics';
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
