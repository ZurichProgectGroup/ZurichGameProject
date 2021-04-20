import type UserInfo from 'Types/UserInfo';
import type { Comment } from 'Types/Comment';

export type Topic = {
    id: number,
    title: string,
    content: string,
    createdAt: string,
    commentsCount: number,
    author: UserInfo
};

export type TopicWithComments = {
    comments: Comment[],
} & Topic;
