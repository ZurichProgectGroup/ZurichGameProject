import { TLeaderItemDTO } from 'Api/LeaderboardApi';
import { Topic } from 'Types/ForumTopic';
import type { Comment } from 'Types/Comment';
import { LoadingStatus } from 'Types/common';
import { Theme } from 'Types/Theme';

export interface IStoreCTX {
    readonly account:{
        user: User | null,
        status: LoadingStatus,
        theme: Theme
    },
    readonly game: {
        currentScore: number
    },
    readonly leaderboard: {
        list: TLeaderItemDTO[],
        isLoading: boolean,
        error: null | string,
    },
    readonly topics: {
        list: [],
        isLoading: boolean,
        error: null | string,
    },
    readonly topic: {
        topic: Topic,
        comments: Comment[],
        isLoading: boolean,
        error: null | string,
    }
}
