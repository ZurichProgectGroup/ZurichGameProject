import { TLeaderItemDTO } from 'Api/LeaderboardApi';
import { Topic } from 'Types/ForumTopic';
import type { Comment } from 'Types/Comment';

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
    },
    topics: {
        list: [],
        isLoading: boolean,
        error: null | string,
    },
    topic: {
        topic: Topic,
        comments: Comment[],
        isLoading: boolean,
        error: null | string,
    }
}
