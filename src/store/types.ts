import { StringKeyString } from 'Utils/custom_types';
import { TLeaderItemDTO } from 'Api/LeaderboardApi';

export interface IStoreCTX {
    readonly account:{
        user: StringKeyString
    },
    readonly game: {
        currentScore: number
    },
    readonly leaderboard: {
        list: TLeaderItemDTO[],
        isLoading: boolean,
        error: null | string,
    }
}
