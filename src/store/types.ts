import { StringKeyString } from 'Utils/custom_types';
import { TLeaderItemDTO } from 'Api/LeaderboardApi';

export interface IStoreCTX {
    account:{
        user: StringKeyString
    },
    game: {
        currentScore: number
    },
    leaderboard: {
        list: TLeaderItemDTO[],
        isLoading: boolean,
        error: null | string,
    }
}
