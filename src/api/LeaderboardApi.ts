import { leaderboardTransportInstance } from './TransportInstances';

export const ratingFieldName = 'BEAT_RUNNER_LEADERBOARD_SCORE';

export const ratingLimit = 20;

export type TResultsSave = {
    score: number,
    id: string | number,
    login: string,
    avatar: string | null
};

export type TLeaderItemDTO = {
    data: {
        id: string | number,
        login: string,
        avatar: null | string,
        [ratingFieldName]: number
    }
};

export default class LeaderboardApi {
    static async saveResult(result: TResultsSave): Promise<unknown> {
        return leaderboardTransportInstance.post('/', {
            data: {
                data: {
                    [ratingFieldName]: result.score,
                    id: result.id,
                    login: result.login,
                    avatar: result.avatar,
                },
                ratingFieldName,
            },
        });
    }

    static async getResults(cursor = 0): Promise<TLeaderItemDTO[]> {
        return leaderboardTransportInstance.post('/all', {
            data: {
                ratingFieldName,
                limit: ratingLimit,
                cursor,
            },
        });
    }
}
