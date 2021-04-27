import { TLeaderItemDTO } from 'api/LeaderboardApi';
import { Topic } from 'types/ForumTopic';
import type { Comment } from 'types/Comment';
import { LoadingStatus } from 'types/common';
import { Theme } from 'types/Theme';

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
        list: Topic[],
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
