import type UserInfo from 'types/UserInfo';
import type { Comment } from 'types/Comment';

export type Topic = {
    id?: number,
    title?: string,
    content?: string,
    createdAt?: string,
    commentsCount?: number,
    author?: UserInfo
};

export type TopicWithComments = {
    comments: Comment[],
} & Topic;
