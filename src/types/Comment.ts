import UserInfo from 'Types/UserInfo';

export type Comment = {
    id: number,
    author: UserInfo,
    createdAt: string,
    text: string,
    children?: Comment[],
    repliesCount: number
};

export type CommentCreate = {
    text: string,
    topicId: number,
    parentId?: number,
};
