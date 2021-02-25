import { TLeaderItemDTO } from 'Api/LeaderboardApi';

export interface IStoreCTX {
    account:{
        user: User | null
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
