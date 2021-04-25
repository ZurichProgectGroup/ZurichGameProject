import { TLeaderItemDTO } from 'Api/LeaderboardApi';
import { Topic } from 'Types/ForumTopic';
import type { Comment } from 'Types/Comment';
import { LoadingStatus } from 'Types/common';
import { Theme } from 'Types/Theme';

export interface IStoreCTX {
    account:{
        user: User | null,
        status: LoadingStatus,
        theme: Theme
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
